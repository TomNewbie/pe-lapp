import { Router } from "express";
import { authController } from "../controller/auth";
import { fakeLogIn } from "../../utils/fake_log_in/controller";

const router = Router();

if (process.env.NODE_ENV !== "production") {
  // fake log in route for development
  router.get("/auth/FAKE_LOG_IN", fakeLogIn);
}

// Route for Google OAuth login
router.get("/auth/login", authController.login);
// Route for Google OAuth callback
router.get("/auth/login/callback", authController.loginCallback);
router.get("/auth/logout", authController.logout);
// all other api routes are protected and need authentication
router.use(authController.authenticateJWT);

export { router as authRouter };
