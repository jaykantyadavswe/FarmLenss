import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    imageUrl: {
        type: String,
        required: true
    },
    analysis: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Analysis", analysisSchema);