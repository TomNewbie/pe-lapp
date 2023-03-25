import { Types } from "mongoose";

export interface IGoogleUser {
  name: string;
  email: string;
  avatar: string;
}

export interface IUser extends IGoogleUser {
  phone_number?: string;
}

export interface IStudent extends IUser {
  major?: string;
  intake?: number;
}

export interface ILecturer extends IUser {
  faculty?: string;
}

export interface IParticipant {
  id: Types.ObjectId;
  progress: number;
}
