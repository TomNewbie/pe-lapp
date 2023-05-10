import { expect } from "chai";
import supertest from "supertest";
import app from "../app";
import * as mongoServer from "./utils/memory_mongodb_helper";
import {students, lecturers} from "./utils/initials";
import { Student, Lecturer } from "../api/model/user";
import { UserRole } from "../api/service/user";
import jwt from "jsonwebtoken";

const api = supertest(app);
const jwt_secret = process.env.JWT_SECRET;

before(async () => {
    await mongoServer.connect();
});

beforeEach(async () => {
    await Lecturer.deleteMany();
    await Student.deleteMany();
    await Lecturer.insertMany(lecturers);
    await Student.insertMany(students);
})

after(async () => {
    await mongoServer.disconnect()
});

const createAccessToken = (_id: string, role: UserRole) => {
    return jwt.sign({_id, role}, jwt_secret!);
}

describe("user API testing", () => {
    describe("/api/user/info", () => {
        it("GET a student", async() => {
            const student = students[0];
            const accessToken = createAccessToken(student._id, "student");
            const res = await api
                .get("/api/user/info")
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(200);
            expect(res.body.name).to.be.equal(student.name);
        })

        it("GET a lecturer", async() => {
            const lecturer = lecturers[0];
            const accessToken = createAccessToken(lecturer._id, "lecturer");
            const res = await api
                .get("/api/user/info")
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(200);
            expect(res.body.name).to.be.equal(lecturer.name);
        })
    })

    describe("/api/user/profile", () => {
        it("PATCH a student", async() => {
            const expectedResponse = {
                name: "John Doe",
                _id: "17028@student.vgu.edu.vn",
                email: "17028@student.vgu.edu.vn",
                avatar: "https://example.com/avatar/johndoe.jpg",
                phone_number: "0123456789",
                major: "Business Administration",
                intake: 2023
            };
            const student = students[0];
            const accessToken = createAccessToken(student._id, "student");
            await api
                .patch("/api/user/profile")
                .send({
                    major: expectedResponse.major,
                    intake: expectedResponse.intake,
                    phone_number: expectedResponse.phone_number,
                })
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(200);
            const updatedUser = await Student.findById(student._id);
            expect(updatedUser).to.include(expectedResponse);
        })

        it("PATCH a lecturer", async() => {
            const expectedResponse = {
                name: "Dr. Sarah Lee",
                _id: "sarahlee@example.com",
                email: "sarahlee@example.com",
                avatar: "https://example.com/avatar/sarahlee.jpg",
                phone_number: "111-111-1112",
                faculty: "Psychology"
            };
            const lecturer = lecturers[0];
            const accessToken = createAccessToken(lecturer._id, "lecturer");
            await api
                .patch("/api/user/profile")
                .send({
                    phone_number: expectedResponse.phone_number,
                    faculty: expectedResponse.faculty,
                })
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(200);
            const updatedUser = await Lecturer.findById(lecturer._id);
            expect(updatedUser).to.include(expectedResponse);
        })

        it("invalid PATCH", async() => {
            const lecturer = lecturers[0];
            const accessToken = createAccessToken(lecturer._id, "lecturer");
            const res = await api
                .patch("/api/user/profile")
                .send({
                    falcuty: "Psychology",
                    major: "Psychology"
                })
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(400);
            expect(res.text).to.be.equal("Invalid input");
            const updatedUser = await Lecturer.findById(lecturer._id);
            expect(updatedUser).to.include(lecturer);
        })
    })

    describe("/api/student/:id", () => {
        it("GET student profile", async() => {
            const student = students[0];
            const accessToken = createAccessToken(student._id, "student");
            const res = await api
                .get(`/api/student/${student._id}`)
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(200);
            expect(res.body).to.deep.equal(student);
        }) 

        it("invalid GET", async() => {
            const id = "19992@student.vgu.edu.vn";
            const accessToken = createAccessToken(id, "student");
            await api
                .get(`/api/student/${id}`)
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(404);
        }) 
    })
})