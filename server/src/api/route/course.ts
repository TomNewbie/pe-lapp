import { Router } from "express";
import { courseController } from "../controller/course";

const router = Router();

router.get("/courses", courseController.getAllCourses);
router.post("/course/:id", courseController.joinCourse);
router.post("/courses", courseController.createCourse);
router.patch("/courses/:id", courseController.updateCourse);
export { router as courseRouter };
