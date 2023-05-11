import { Router } from "express";
import { exerciseController } from "../controller/exercise";
import { courseController } from "../controller/course";
import { fileController } from "../controller/file";

const router = Router();

router.post(
  "/course/:id/exercise",
  courseController.verifyAuthorize,
  fileController.getFile,
  fileController.upload,
  exerciseController.createExercise
);
router.post(
  "/exercises/:id",
  exerciseController.verifyAuthorize,
  fileController.getFile,
  fileController.upload,
  exerciseController.createSolution
);
router.get("/course/:id/exercises", exerciseController.getAllExercises);
router.get(
  "/exercises/:id",
  // exerciseController.verifyAuthorize,
  exerciseController.getDetail
);
router.patch(
  "/exercises/:id",
  exerciseController.verifyOwner,
  fileController.getFile,
  fileController.upload,
  exerciseController.editExercise
);
router.patch(
  "/exercises/:id/students/:studentId",
  exerciseController.verifyOwner,
  exerciseController.addGrade
);
// router.delete(
//   "/exercises/:id",
//   exerciseController.verifyOwner,
//   exerciseController.remove
// );

export { router as exerciseRouter };