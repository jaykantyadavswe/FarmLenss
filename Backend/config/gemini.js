import { GoogleGenerativeAI } from "@google/generative-ai";

let cachedModel = null;

const getGeminiModel = () => {
    if (cachedModel) return cachedModel;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    cachedModel = genAI.getGenerativeModel({
        model: "gemini-3.5-flash",

        generationConfig: {
            responseMimeType: "application/json",

            responseSchema: {
                type: "object",

                properties: {
                    explanation: {
                        type: "string"
                    },

                    data: {
                        type: "object",

                        properties: {

                            crop_name: {
                                type: "string"
                            },

                            title: {
                                type: "string"
                            },

                            disease: {
                                type: "string"
                            },

                            confidence: {
                                type: "string"
                            },

                            cause: {
                                type: "string"
                            },

                            treatment: {
                                type: "string"
                            },

                            prevention: {
                                type: "string"
                            },

                            medicine: {
                                type: "string"
                            }

                        }
                    }
                }
            }
        }
    });

    return cachedModel;
};

export default getGeminiModel;
