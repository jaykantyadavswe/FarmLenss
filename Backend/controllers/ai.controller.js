import Analysis from "../models/analysis.model.js";
import { deleteFile, readFileAsBase64 } from "../utils/fileHelper.js";
import { uploadToCloud } from "../services/cloudinary.service.js";
import { analyzeImageWithAI } from "../services/ai.service.js";
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

        const userText = req.body.text || "";

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

        const cloudResult = await uploadToCloud(req.file.path);
        await Analysis.create({
            user: req.user.id,
            imageUrl: cloudResult.secure_url,
            analysis
        });

        deleteFile(req.file.path)

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






