import genAI from "../config/gemini.js";

export const getGeminiModel = genAI.getGenerativeModel({
    model: "gemini-3.5-flash"
});