import { ExerciseType } from "../model/exercise";
import { Response } from "express";
import { AuthRequest } from "./auth";
// const getAllExercises = (req: AuthRequest, res: Response) => {
//   const { id } = req.params;
// };

// const createExercise = (req: AuthRequest, res: Response) => {
//   const {id} = req.params;
//   const {name, deadline, file, description} = req.body;


  
// }; // need upload api

const getDetail = () => {};

const editExercise = () => {};

const addGrade = () => {};

const deleteExercise = () => {};

export const exerciseController = {
  getAllExercises,
  createExercise,
  addGrade,
  deleteExercise,
  editExercise,
  getDetail,
};
