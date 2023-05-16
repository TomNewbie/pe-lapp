import { Router } from "express";
import { exerciseController } from "../controller/exercise";
import { courseController } from "../controller/course";
import { fileController } from "../controller/file";
import { solutionController } from "../controller/solution";

const router = Router();

router.post(
  "/course/:id/exercise",
  courseController.verifyAuthorize,
  fileController.getFileFromUser,
  fileController.upload,
  exerciseController.createExercise
);
router.post(
  "/exercises/:id",
  solutionController.verifyAuthorize,
  fileController.getFileFromUser,
  fileController.upload,
  solutionController.createSolution
);
router.get("/course/:id/exercises", exerciseController.getAllExercises);
router.get(
  "/exercises/:id",
  // exerciseController.verifyAuthorize,
  exerciseController.getDetail
);
router.patch(
  "/exercises/:id",
  exerciseController.verifyAuthorize,
  fileController.getFileFromUser,
  fileController.upload,
  exerciseController.update
);
router.patch(
  "/exercises/:id/students/:studentId",
  exerciseController.verifyAuthorize,
  solutionController.addGrade
);
router.delete(
  "/exercises/:id",
  exerciseController.verifyAuthorize,
  exerciseController.remove
);

export { router as exerciseRouter };
