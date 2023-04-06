import { Lecturer, LecturerType, Student, StudentType } from "../model/user";

export type UserRole = "student" | "lecturer";

export const splitEmail = (email: string): [string, UserRole] => {
  const [_id, domain] = email.split("@");
  return [_id, domain.startsWith("student") ? "student" : "lecturer"];
};

export async function upsertUser(
  role: "student",
  user: StudentType
): Promise<void>;
export async function upsertUser(
  role: "lecturer",
  user: LecturerType
): Promise<void>;
export async function upsertUser(
  role: UserRole,
  user: StudentType | LecturerType
): Promise<void>;
export async function upsertUser(
  role: UserRole,
  { _id, ...fields }: StudentType | LecturerType
): Promise<void> {
  const User = role === "student" ? Student : Lecturer;
  await User.updateOne({ _id }, fields, { upsert: true });
}

export const getStudentById = (id: string): Promise<StudentType | null> =>
  Student.findById(id);

export const getLecturerById = (id: string): Promise<LecturerType | null> =>
  Lecturer.findById(id);
