import { Types } from "mongoose";
import { IRichText } from "./file";
import { ILecturer, IParticipant } from "./user";

export interface ICourse {
  name: string;
  content: IRichText;
  picture: string;
  semester: string;
  duration: number;
  lecturer: Types.ObjectId;
  participants: Types.DocumentArray<IParticipant>;
}
