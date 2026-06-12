import getGeminiModel from "../config/gemini.js";

// Helper to add timeout to promises
const withTimeout = (promise, ms) => {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`Gemini API timeout after ${ms}ms`)), ms)
        )
    ]);
};

export const analyzeImageWithAI = async (base64Image, mimeType, userText) => {
    const model = getGeminiModel();

    const result = await withTimeout(
        model.generateContent([
            {
                inlineData: {
                    mimeType,
                    data: base64Image
                }
            },
            {
                text: `
                You are an expert agricultural AI.

                Analyze the crop image and return response in TWO PARTS:

                1. "explanation" → detailed human-readable explanation
                2. "data" → structured JSON format

                STRICT FORMAT:

            {
                "explanation": "Full detailed explanation here...",
                "data": {
                "title": "",
                "disease": "",
                "confidence": "",
                "cause": "",
                "treatment": "",
                "prevention": "",
                "medicine": ""
            }
        }

        Rules:
        - Do NOT add markdown
        - Do NOT add extra text outside JSON
        - Keep JSON valid

        User message: "${userText}"
        `
            }
        ]),
        30000 // 30 second timeout
    );

    return result.response.text();
};