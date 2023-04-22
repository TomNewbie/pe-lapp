import express, { Request, Response, Router } from "express";
import path from "path";

const STATIC_PATH = path.join(__dirname, "..", "..", "build");

const router = Router();

router.use(express.static(STATIC_PATH));

router.get("*", (_: Request, res: Response) => {
  res.sendFile(path.join(STATIC_PATH, "index.html"));
});

export { router as clientRouter };
