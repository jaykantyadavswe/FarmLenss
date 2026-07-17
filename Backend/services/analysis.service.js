import getGeminiModel from "../config/gemini.js";
// import { prompt, prompt2 } from "../constants/prompts.js";


// Helper to add timeout to promises
const withTimeout = (promise, ms) => {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`Gemini API timeout after ${ms}ms`)), ms)
        )
    ]);
};

export const analyzeImageWithAI = async (base64Image, mimeType, promptWithUserText) => {
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
                text: promptWithUserText
            }
        ]),
        30000 // 30 second timeout
    );

    return result.response.text();
};