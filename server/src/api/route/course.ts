import { Router } from "express";
import { courseController } from "../controller/course";
import { Request, Response } from "express";
const router = Router();

router.get("/courses", courseController.getAllCourses);
router.post("/course/:id", courseController.joinCourse);
router.post("/courses", courseController.createCourse);
router.patch("/courses/:id", courseController.updateCourse);
// router.get("/api/course/:id/participants", (_req: Request, _res: Response) => {
//   console.log("/api/course/:id/participants");
// });
// router.get("/api/:courseId/participants", (_req: Request, _res: Response) => {
//   console.log("/api/course/:id/participants");
// });
export { router as courseRouter };
