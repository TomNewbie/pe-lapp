import path from "path";
import dotenv from "dotenv";
const envPath = path.resolve(__dirname, "..", "..", ".env");
dotenv.config({ path: envPath });
import { db } from '../config/database'
import { Student, Lecturer } from '../api/model/user'
import { CourseContent, Course } from "../api/model/course";
import { students, lecturers, contents, courses } from './dummies';

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
    await insertData(CourseContent, contents);
    await insertData(Course, courses);
  } else {
    await deleteData(Student);
    await deleteData(Lecturer);
    await deleteData(CourseContent);
    await deleteData(Course);
  }
  process.exit();
}).catch(err => {
  console.log(err);
})


