import { Router } from "express";
import { authController } from "../controller/auth";
const router = Router();
router.get("/auth/google/callback", authController.login);
export { router as authRouter };
