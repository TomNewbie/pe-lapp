import { Router } from "express";
import { fileController } from "../controller/file";
import { contentController } from "../controller/content";

const router = Router();
router.delete("/course/:id/content/:course_content_id");
router.post(
  "/content/course/:id",
  contentController.verifyAuthorize,
  fileController.upload,
  contentController.createContent
);
export { router as contentRouter };
