import { expect } from "chai";
import * as mongoose from "mongoose";
import * as supertest from "supertest";
import * as app from "../src/app";
import * as mongoServer from "./utils/memory_mongodb_helper";
import {courses} from "./utils/initials"
import {Course} from "../api/model/course";

const api = supertest(app);

before(async () => {
    await mongoServer.connect();
  });

beforeEach(async () => {
await Course.deleteMany();
await Course.insertMany(courses);
})

after(async () => {
await mongoServer.disconnect
});

describe("GET /api/courses", () => {

  it("should return all courses", async () => {
    const res = await api
        .get("/api/courses")
        .expect(200);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.lengthOf(2);
  });
});
