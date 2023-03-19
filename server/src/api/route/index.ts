import { Router } from "express";
import { authRouter } from "./auth";

const router = Router();

router.use("/api", authRouter);
export { router as indexRouter };
