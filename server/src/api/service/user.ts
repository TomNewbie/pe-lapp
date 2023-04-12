import { Lecturer, LecturerType, Student, StudentType } from "../model/user";

export type UserRole = "student" | "lecturer";

const splitEmail = (email: string): [string, UserRole] => {
  const [_id, domain] = email.split("@");
  return [_id, domain.startsWith("student") ? "student" : "lecturer"];
};

async function upsertUser(role: "student", user: StudentType): Promise<void>;
async function upsertUser(role: "lecturer", user: LecturerType): Promise<void>;
async function upsertUser(
  role: UserRole,
  user: StudentType | LecturerType
): Promise<void>;
async function upsertUser(
  role: UserRole,
  { _id, name, avatar, ...fields }: StudentType | LecturerType
): Promise<void> {
  const User = role === "student" ? Student : Lecturer;
  await User.updateOne(
    { _id },
    { name: name || undefined, avatar: avatar || undefined, ...fields },
    // for using default value if name or avatar is empty string ""
    { upsert: true }
  );
}

const getStudentById = async (id: string): Promise<StudentType | null> =>
  await Student.findById(id).lean();

const getLecturerById = async (id: string): Promise<LecturerType | null> =>
  await Lecturer.findById(id).lean();

type LecturerList = Array<{
  _id: string;
  name: string;
  faculty?: string;
}>;

interface GetLecturerListOptions {
  start?: number;
  num?: number;
}

const getLecturerList = async ({
  start = 0,
  num = 0,
}: GetLecturerListOptions): Promise<LecturerList> =>
  await Lecturer.find(
    {},
    { _id: 1, name: 1, faculty: 1 },
    { sort: "name", skip: start, limit: num }
  ).lean();

const getUserName = async (
  id: string,
  role: UserRole
): Promise<string | undefined> => {
  const User: any = role === "student" ? Student : Lecturer;
  const res: { name: string } | null = await User.findById(
    id,
    "-_id name"
  ).lean();
  return res?.name;
};

export const userService = {
  upsertUser,
  getLecturerById,
  getStudentById,
  splitEmail,
  getLecturerList,
  getUserName,
};
