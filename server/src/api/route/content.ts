import { Router } from "express";
import { fileController } from "../controller/file";
import { contentController } from "../controller/content";
import { courseController } from "../controller/course";
// import { verifyController } from "../controller/verify";

const router = Router();
router.delete(
  "/course/:id/content/:course_content_id",
  contentController.verifyAuthorize,
  contentController.remove
);
router.post(
  "/course/:id/content",
  courseController.verifyAuthorize,
  fileController.upload,
  contentController.create
);
router.patch(
  "/course/:id/content/:course_content_id",
  contentController.verifyAuthorize,
  fileController.upload,
  contentController.update
);
router.get(
  "/course/:id/contents",
  courseController.isInCourse,
  courseController.getAllContent
);

export { router as contentRouter };
