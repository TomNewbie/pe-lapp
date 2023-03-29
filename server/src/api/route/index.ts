import { Request, Response, Router } from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";

const router = Router();

router.use(authRouter);
router.use(userRouter);

router.all("*", (_: Request, res: Response) => {
  res.sendStatus(404);
});

export { router };
