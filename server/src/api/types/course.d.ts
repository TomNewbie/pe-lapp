import { Types } from "mongoose";
import { IRichText } from "./file";
import { ILecturer, IParticipant } from "./user";

export interface ICourse {
  name: string;
  content?: Types.ObjectId | string;
  picture: string;
  semester: string;
  duration: string;
  lecturer: string;
  participants?: Types.DocumentArray<IParticipant>;
}
