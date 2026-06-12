import { GoogleGenerativeAI } from "@google/generative-ai";

let cachedModel = null;

const getGeminiModel = () => {
    if (cachedModel) return cachedModel;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    cachedModel = genAI.getGenerativeModel({
        model: "gemini-3.5-flash"
    });

    return cachedModel;
};

export default getGeminiModel;
