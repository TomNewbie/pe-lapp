import { Router } from "express";
import { courseController } from "../controller/course";

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
router.get("/course/:id", courseController.getAllContent);

export { router as courseRouter };
