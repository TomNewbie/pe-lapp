export interface IGoogleUser {
  name: string;
  email: string;
  avatar: string;
}

export interface IUser extends IGoogleUser {
  role: Role;
  major?: string;
  phone_number?: string;
}

export type Role = "student" | "teacher";
