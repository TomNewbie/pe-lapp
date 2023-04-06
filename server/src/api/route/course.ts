import { Router } from "express";
import { courseController } from "../controller/course";

const router = Router();

router.get("/courses", courseController.getAllCourses);
router.post("/course/:id", courseController.joinCourse);

export { router as courseRouter };
