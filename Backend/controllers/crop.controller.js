import cloudinary from "../config/cloudinary.js";
import Analysis from "../models/analysis.model.js";
import { deleteFile, readFileAsBase64 } from "../utils/fileHelper.js";
import { uploadToCloud } from "../services/cloudinary.service.js";
import { analyzeImageWithAI } from "../services/ai.service.js";
import getGeminiModel from "../config/gemini.js";

export const uploadImage = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            })
        }

        const result = await cloudinary.uploader.upload(file.path);

        res.status(200).json({
            success: true,
            imageUrl: result.secure_url
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const analyzeCrop = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file required"
            });
        }

        const userText = req.body.text || "";
        const filePath = req.file.path;

        // Read file as base64 (async)
        const base64Image = await readFileAsBase64(filePath);

        // Send to AI for analysis
        const analysis = await analyzeImageWithAI(
            base64Image,
            req.file.mimetype,
            userText
        );

        const clean = analysis.replace(/```json|```/g, "");
        let parsed;

        try {
            parsed = JSON.parse(clean);
        } catch {
            parsed = {
                explanation: analysis,
                data: {
                    title: "Crop Analysis",
                    disease: "",
                    confidence: "",
                    cause: "",
                    treatment: "",
                    prevention: "",
                    medicine: ""
                }
            };
        }

        // Upload to Cloudinary first to get the URL
        const cloudResult = await uploadToCloud(filePath);

        // Save to DB with actual Cloudinary URL
        const analysisDoc = await Analysis.create({
            user: req.user.id,
            imageUrl: cloudResult.secure_url, // Real URL from Cloudinary
            title: parsed.data.title,
            explanation: parsed.explanation,
            structuredData: parsed.data,
            messages: [
                {
                    role: "assistant",
                    content: parsed.explanation
                }
            ]
        });

        // Delete file asynchronously (don't wait for it)
        deleteFile(filePath).catch(err => console.warn("File cleanup failed:", err));

        res.status(200).json({
            success: true,
            analysisId: analysisDoc._id,
            analysis: analysisDoc,
        });

    } catch (error) {
        console.log("AI ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const chatWithAi = async (req, res) => {
    try {
        const { message, analysisId } = req.body;

        if (!message || !analysisId) {
            return res.status(400).json({
                success: false,
                message: "Message and analysisId are required"
            });
        }

        const analysis = await Analysis.findOne({
            _id: analysisId,
            user: req.user.id
        });

        if (!analysis) {
            return res.status(404).json({
                success: false,
                message: "Analysis not found"
            })
        }

        analysis.messages.push({
            role: "user",
            content: message
        });

        const history = analysis.messages.map(msg => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.content }]
        }));

        const model = getGeminiModel();

        const result = await model.generateContent({
            contents: history
        });

        const reply = result.response.text();

        analysis.messages.push({
            role: "assistant",
            content: reply
        });

        await analysis.save();

        res.json({
            success: true,
            reply,
            messages: analysis.messages
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getHistory = async (req, res) => {
    try {
        const data = await Analysis.find({ user: req.user.id })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
