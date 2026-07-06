import { Router } from "express";
import { checkActive, login, register } from "../controllers/auth.controller.js";

const router = Router();

router.route("/").get(checkActive);
router.route("/auth/register").post(register);
router.route("/auth/login").post(login);

export default router;