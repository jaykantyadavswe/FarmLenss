import express from 'express';
import { getHistory, uploadImage } from '../controllers/crop.controller.js';
import { upload } from '../middleware/upload.middleware.js';
import { protect } from '../middleware/auth.middleware.js';
import { analyzeCrop } from '../controllers/ai.controller.js';

const router = express.Router();

router.post("/crop/analyze", protect, upload.single("media"), analyzeCrop);
router.get("/crop/history", protect, getHistory);

export default router;
