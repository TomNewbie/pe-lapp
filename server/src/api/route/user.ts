import { Router } from "express";
import { userController } from "../controller/user";

const router = Router();

router.get("/student/:id", userController.getStudent);
router.get("/lecturer/:id", userController.getLecturer);
router.get("/lecturers", userController.getLecturerList);
router.get("/user/info", userController.getUserInfo);
router.patch("/user/profile", userController.updateUserProfile);

export { router as userRouter };
