import { cloudinary } from "../config/cloudinary.js";

export const uploadToCloud = async (filePath) => {
    return await cloudinary.uploader.upload(filePath);
};

