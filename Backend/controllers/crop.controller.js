import cloudinary from "../config/cloudinary.js";
import Analysis from "../models/analysis.model.js";

export const uploadImage = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            })
        }

        const result = await cloudinary.uploader.upload(file.path);

        res.status(200).json({
            success: true,
            imageUrl: result.secure_url
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getHistory = async (req, res) => {
    try {
        const data = await Analysis.find({ user: req.user.id })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};