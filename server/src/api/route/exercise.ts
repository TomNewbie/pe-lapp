import { Router } from "express";
import { exerciseController } from "../controller/exercise";

const router = Router();

router.get("/course/:id/exercises", exerciseController.getAllExercises);
router.post("/course/:id/exercise", exerciseController.createExercise);
router.get("/exercises/:id", exerciseController.createExercise);
router.patch("/exercises/:id", exerciseController.editExercise);
router.post("/exercises/:id/students/:studentId", exerciseController.addGrade);
router.delete("/exercises/:id", exerciseController.deleteExercise);
