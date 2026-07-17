import mongoose from "mongoose";
import messageSchema from "./message.js";

const analysisSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    structuredData: {
        disease: String,
        confidence: String,
        cause: String,
        treatment: String,
        prevention: String,
        medicine: String
    },

    messages: [messageSchema]
}, { timestamps: true });

export default mongoose.model("Analysis", analysisSchema);