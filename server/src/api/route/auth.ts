import { Router } from "express";
import { authController } from "../controller/auth";

const router = Router();

// Route for Google OAuth login
router.get("/auth/login", authController.login);
// Route for Google OAuth callback
router.get("/auth/login/callback", authController.loginCallback);
// all other api routes are protected and need authentication
router.use(authController.authenticateJWT);

export { router as authRouter };
