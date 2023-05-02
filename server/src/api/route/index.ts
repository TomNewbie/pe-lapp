import { Request, Response, Router } from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { courseRouter } from "./course";
import { contentRouter } from "./content";
import { fileController } from "../controller/file";

const router = Router();

router.use(authRouter);
router.use(userRouter);
router.use(courseRouter);
router.use(contentRouter);
router.get("/view/:url", fileController.get);
// router.use(exercise)
router.all("*", (_: Request, res: Response) => {
  res.status(404).send("API Endpoint Not Found");
});

export { router as apiRouter };
