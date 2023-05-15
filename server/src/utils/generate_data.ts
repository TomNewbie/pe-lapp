import path from "path";
import dotenv from "dotenv";
const envPath = path.resolve(__dirname, "..", "..", ".env");
dotenv.config({ path: envPath });
import { db } from '../config/database'
import { Student, Lecturer } from '../api/model/user'
import { students, lecturers } from './dummies';

const importData = async(Model: any, data: any) => {
  try {
    console.log(data);
    await Model.insertMany(data);
  } catch(err) {
    console.log(err);
  }
}

db.then(async () => {
  console.log("Connected to database");
  await importData(Student,students);
  await importData(Lecturer, lecturers);
  process.exit();
}).catch(err => {
  console.log(err);
})


