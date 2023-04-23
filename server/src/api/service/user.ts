import { Lecturer, LecturerType, Student, StudentType } from "../model/user";

export type UserRole = "student" | "lecturer";

const splitEmail = (email: string): { _id: string; role: UserRole } => {
  const [_id, domain] = email.split("@");
  return { _id, role: domain.startsWith("student") ? "student" : "lecturer" };
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

type LecturerProfileType = LecturerType & {
  courses: Array<{ name: string; semester?: string }>;
};

const getLecturerById = async (
  _id: string
): Promise<LecturerProfileType | null> => {
  const [lecturer = null] = await Lecturer.aggregate()
    .match({ _id })
    .lookup({
      from: "courses",
      localField: "_id",
      foreignField: "lecturer_id",
      as: "courses",
    })
    .project({
      _id: 1,
      email: 1,
      name: 1,
      avatar: 1,
      phone_number: 1,
      faculty: 1,
      courses: {
        name: 1,
        semester: 1,
      },
    });
  return lecturer;
};

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

type StudentUpdateFields = {
  major?: string;
  intake?: number;
  phone_number?: string;
};

type LecturerUpdateFields = {
  faculty?: string;
  phone_number?: string;
};

export enum UpdateUserError {
  NONE,
  INVALID_INPUT,
}

async function updateUser(
  role: "student",
  id: string,
  fields: StudentUpdateFields
): Promise<UpdateUserError>;
async function updateUser(
  role: "lecturer",
  id: string,
  fields: LecturerUpdateFields
): Promise<UpdateUserError>;
async function updateUser(
  role: UserRole,
  id: string,
  fields: StudentUpdateFields | LecturerUpdateFields
): Promise<UpdateUserError>;
async function updateUser(
  role: UserRole,
  _id: string,
  {
    faculty,
    intake,
    major,
    phone_number,
  }: StudentUpdateFields & LecturerUpdateFields
): Promise<UpdateUserError> {
  const User = role === "student" ? Student : Lecturer;
  const fields =
    role === "student"
      ? ({ intake, major, phone_number } as StudentUpdateFields)
      : ({ faculty, phone_number } as LecturerUpdateFields);
  try {
    const res = await User.updateOne({ _id }, fields, { runValidators: true });
    if (!res.matchedCount) return UpdateUserError.INVALID_INPUT;
    return UpdateUserError.NONE;
  } catch {
    return UpdateUserError.INVALID_INPUT;
  }
}

export const userService = {
  upsertUser,
  getLecturerById,
  getStudentById,
  splitEmail,
  getLecturerList,
  getUserName,
  updateUser,
};
