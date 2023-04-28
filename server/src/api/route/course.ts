import { Router } from "express";
import { courseController } from "../controller/course";
import { fileController } from "../controller/file";

const router = Router();

router.get("/courses", courseController.getAllCourses);
router.post("/course/:id", courseController.joinCourse);
router.post("/course", courseController.createCourse);
router.patch("/course/:id", courseController.updateCourse);
router.get("/course/:id/participants", courseController.getParticipants);
router.post(
  "/course/:id/participant/:studentId",
  courseController.addParticipant
);
router.delete(
  "/course/:id/participant/:studentId",
  courseController.removeParticipant
);

export { router as courseRouter };
