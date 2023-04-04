import { expect } from "chai";
import supertest from "supertest";
import app from "../app";
import * as mongoServer from "./utils/memory_mongodb_helper";
import {courses, students, lecturers} from "./utils/initials"
import {Course} from "../api/model/course";
import { Student, Lecturer } from "../api/model/user";
import jwt from "jsonwebtoken";

const api = supertest(app);
const jwt_secret = process.env.JWT_SECRET;

before(async () => {
    await mongoServer.connect();
});

beforeEach(async () => {
    await Student.deleteMany();
    await Lecturer.deleteMany();
    await Course.deleteMany();
    await Student.insertMany(students);
    await Lecturer.insertMany(lecturers);
    await Course.insertMany(courses);
})

after(async () => {
    await mongoServer.disconnect
});

describe("GET /api/courses", () => {
  it("should return all courses of the sent student", async () => {
    const expectedCourses = [
      {
        name: "Course A",
        picture: "http://example.com/image1.jpg",
        lecturer_name: "Dr. Sarah Lee",
        progress: 75,
      },
      {
        name: "Course B",
        picture: "http://example.com/image2.jpg",
        lecturer_name: "Dr. Sarah Lee",
        progress: 75,
      },
    ]
    const student = students[0];
    const accessToken = jwt.sign({email: student._id}, jwt_secret!);
    const res = await api
        .get("/api/courses")
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200);
    expect(res.body).to.have.lengthOf(2);
    expect(res.body).to.have.deep.members(expectedCourses);
  });
});
