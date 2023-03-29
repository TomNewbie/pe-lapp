import { Router } from "express";
import { userController } from "../controller/user";

const router = Router();

router.get("/user/:id", userController.getUser);

export { router as userRouter };
