import { Router } from "express";
import { analyzeCrop, checkActive } from "../controllers/analysis.controller.js";
import upload from "../middleware/upload.middleware.js";

const router = Router();

router.route("/").get(checkActive);
router.post("/analyze", upload.single("image"), analyzeCrop);

export default router;
