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
        console.log(userText);

        const base64Image = readFileAsBase64(req.file.path);

        /* const result = await model.generateContent([
            {
                inlineData: {
                    mimeType: req.file.mimetype,
                    data: base64Image
                }
            },
            {
                text: `
                    You are an expert agricultural AI.

                    First, carefully analyze the crop image.

                    Then respond in this structured format:
                    1. Disease Name (if any)
                    2. Confidence Level (Low/Medium/High)
                    3. Cause of Disease
                    4. Suggested Treatment
                    5. Prevention Tips
                    6. Recommended Medicine

                    Now also consider the user's question: "${userText}"

                    If the user asks something specific, prioritize answering that along with the analysis.`
            }
        ]); */

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

        console.log(clean);
        console.log(parsed);

        const cloudResult = await uploadToCloud(req.file.path);

        const analysisDoc = await Analysis.create({
            user: req.user.id,
            imageUrl: cloudResult.secure_url,
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

        deleteFile(req.file.path)

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

        const analysis = await Analysis.findById(analysisId);

        if (!analysis) {
            return res.status(404).json({
                message: "Analysis not found"
            })
        }

        analysis.message.push({
            role: "user",
            content: message
        });

        const history = analysis.message.map(msg => ({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.content }]
        }));

        const model = getGeminiModel();

        const result = await model.generateContent({
            contents: history
        });

        const reply = result.response.text();

        analysis.message.push({
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