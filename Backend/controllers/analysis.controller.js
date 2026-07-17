import { prompt, prompt2 } from "../constants/prompts.js";
import { analyzeImageWithAI } from "../services/analysis.service.js";
import { uploadToCloud } from "../services/cloudinary.service.js";
import { deleteFile } from "../utils/deleteFile.js";
import { readFileAsBase64 } from "../utils/readFileAsBase64.js";

export const checkActive = async (req, res) => {
    res.send("RUNNING......... Analysis");
}

export const analyzeCrop = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file required"
            });
        }

        console.log(req.file);
        const userText = req.body.text || "";
        const filePath = req.file.path;

        // Read file as base64 (async)
        const imageBase64  = await readFileAsBase64(filePath);
        const promptWithUserText = prompt(userText);

        // Send to AI for analysis
        const analysis = await analyzeImageWithAI(
            imageBase64,
            req.file.mimetype,
            promptWithUserText
        );

        const clean = analysis.replace(/```json|```/g, "");

        console.log(clean);

        // Upload to Cloudinary first to get the URL
        const cloudResult = await uploadToCloud(filePath);

        // Delete file asynchronously (don't wait for it)
        deleteFile(filePath).catch(err => console.warn("File cleanup failed:", err));

        res.json({
            success: true,
            image: req.file,
            imageUrl: cloudResult.secure_url
        });
    } catch (error) {
        console.log("AI ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }

};

/* export const analyzeCrop = async (req, res) => {
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
}; */
