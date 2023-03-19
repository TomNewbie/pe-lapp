export interface IUser {
  name: string;
  email: string;
  role: Role;
  major?: string;
  phone_number?: string;
  avatar?: string;
}

export type Role = "student" | "teacher";
