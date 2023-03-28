import { InferSchemaType } from "mongoose";
import { exercise } from "../model/exercise";
import { material, Material } from "../model/material";

export interface IFile {
  name: string;
  description: string;
  createdAt: Date;
  file: string;
}

// export interface IExercise extends IFile {
//   status: "done" | "not done";
//   deadline: Date;
// }

// export interface IMaterial extends IFile {}
export type Material = InferSchemaType<typeof material>;
export type Exercise = InferSchemaType<typeof exercise>;
