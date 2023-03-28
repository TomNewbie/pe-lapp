import { InferSchemaType, Types } from "mongoose";
import { course } from "../model/course";
import { IRichText } from "./file";
import { ILecturer, IParticipant } from "./user";

export type ICourse = InferSchemaType<typeof course>;
