import path from "path";
import dotenv from "dotenv";
const envPath = path.resolve(__dirname, "..", "..", ".env");
dotenv.config({ path: envPath });
import { db } from '../config/database'
import { Student, Lecturer } from '../api/model/user'
import { students, lecturers } from './dummies';

const insertData = async(Model: any, data: any) => {
  try {
    console.log(data);
    await Model.insertMany(data);
  } catch(err) {
    console.log(err);
  }
}

const deleteData = async (Model: any) => {
  try {
    await Model.deleteMany();
  } catch(err) {
    console.log(err);
  }
}

db.then(async () => {
  console.log("Connected to database");
  if (process.argv[2] === '-i') {
    await insertData(Student,students);
    await insertData(Lecturer, lecturers);
  } else {
    await deleteData(Student);
    await deleteData(Lecturer);
  }
  process.exit();
}).catch(err => {
  console.log(err);
})


