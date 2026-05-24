import getGeminiModel from "../config/gemini.js";
import fs from 'fs';
import { cloudinary } from '../config/cloudinary.js';
import Analysis from "../models/analysis.model.js";

/* export const analyzeCrop = async (req, res) => {
    console.log("BODY:", req.body);
    try {
        const { imageUrl } = req.body;

        if (!imageUrl) {
            return res.status(400).json({
                success: false,
                message: "Image URL required"
            });
        }

        const model = getGeminiModel();

        const prompt = `
        You are an agricultural expert AI.

        Analyze this crop image: ${imageUrl}

        Provide response in this format:
        1. Disease Name (if any)
        2. Confidence Level (Low/Medium/High)
        3. Cause of Disease
        4. Suggested Treatment
        5. Prevention Tips
        6. Disease medicine
        7. Find nearby by Shops for Disease medicine
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        res.status(200).json({
            success: true,
            analysis: response
        });

    } catch (error) {
        console.log("AI ERROR:", error.message);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}; */


export const analyzeCrop = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file required"
            });
        }

        const model = getGeminiModel();

        const imageBuffer = fs.readFileSync(req.file.path);
        const base64Image = imageBuffer.toString("base64");

        const result = await model.generateContent([
            {
                inlineData: {
                    mimeType: req.file.mimetype,
                    data: base64Image
                }
            },
            {
                text: `
                You are an agricultural expert.

                Analyze this crop image and provide:
                1. Disease Name
                2. Confidence Level
                3. Cause
                4. Treatment
                5. Prevention
                6. Medicine
                `
            }
        ]);

        const analysis = result.response.text();

        const cloudResult = await cloudinary.uploader.upload(req.file.path);

        await Analysis.create({
            user: req.user.id,
            imageUrl: cloudResult.secure_url,
            analysis
        });

        fs.unlinkSync(req.file.path);

        res.status(200).json({
            success: true,
            analysis: analysis,
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






