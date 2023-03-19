import { Router } from "express";
import { authController } from "../controller/auth";
const router = Router();
// authController.checkNewUser, authController.logi
// router.use("/login", loginController);
router.use(
  "/login/callback",
  authController.checkNewUser,
  authController.login
);
export { router as authRouter };
