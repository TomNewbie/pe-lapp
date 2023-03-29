import { Request, Response, Router } from "express";
import { authRouter } from "./auth";

const router = Router();

router.use(authRouter);

router.all("*", (_: Request, res: Response) => {
  res.sendStatus(404);
});

export { router };
