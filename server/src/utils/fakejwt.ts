import { Lecturer } from "../api/model/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });
const jwt_secret = process.env.JWT_SECRET!;

const fakeJwt = (_id: string, role: "student" | "lecturer") => {
  const accessToken = jwt.sign({ _id, role }, jwt_secret!);
  console.log(accessToken);
};

fakeJwt("god", "lecturer");
