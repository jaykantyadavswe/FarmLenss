import express from 'express';
import { analyzeCrop, chatWithAi, getHistory } from '../controllers/crop.controller.js';
import { upload } from '../middleware/upload.middleware.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/crop/analyze", protect, upload.single("media"), analyzeCrop);
router.post("/crop/chat", chatWithAi);
router.get("/crop/history", protect, getHistory);

export default router;
