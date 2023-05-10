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
            const student = students[0];
            const accessToken = createAccessToken(student._id, "student");
            await api
                .patch("/api/user/profile")
                .send({
                    major: "Business Administration",
                    intake: 2023,
                    phone_number: "0123456789"
                })
                .set("Cookie", [`access_token=${accessToken}`])
                .expect(200);

        })
    })
})