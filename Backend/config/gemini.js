import { GoogleGenerativeAI } from "@google/generative-ai";

const getGeminiModel = () => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log("GEMINI KEY:", process.env.GEMINI_API_KEY);

    return genAI.getGenerativeModel({
        model: "gemini-3.5-flash"
    });

};

export default getGeminiModel;