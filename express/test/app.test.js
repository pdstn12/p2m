import { app } from "../index.js";
import supertest from "supertest";
import mongoose from "mongoose";

const PORT = 8000;

mongoose
  .connect(
    "mongodb://rootuser:rootpass@localhost:27017/p2mTest?authSource=admin"
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Testing Server running on port ${PORT}`)
    )
  )
  .catch((error) => console.log(error));
const request = supertest(app);

describe("Testing works", () => {
  it("gets the users endpoint", async () => {
    const response = await request.get("/api/getUsers");

    expect(response.status).toBe(200);
  });
});

describe("Testing User Functionalities", () => {
  it("POST /api/register", async () => {
    const userData = {
      name: "John Doe",
      email: "doe@example.com",
      phone: "22222123",
      class: "INDP1 A",
      password: "demo12345",
    };

    const response = await request
      .post("/api/register")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(userData);

    //expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        user: expect.objectContaining({
          email: userData.email,
          password: expect.any(String),
          name: userData.name,
          phone: userData.phone,
          class: userData.class,
          type: 1,
          _id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          id: expect.any(Number),
          __v: expect.any(Number),
        }),
        access_token: expect.any(String),
      })
    );
  });

  it("POST /api/login", async () => {
    const userData = {
      email: "doe@example.com",
      password: "demo12345",
    };

    const response = await request
      .post("/api/login")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(userData);

    //expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        user: expect.objectContaining({
          email: userData.email,
          password: expect.any(String),
          name: expect.any(String),
          phone: expect.any(String),
          class: expect.any(String),
          type: 0 || 1,
          _id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          id: expect.any(Number),
          __v: expect.any(Number),
        }),
        access_token: expect.any(String),
      })
    );
  });

  afterAll(() => {
    mongoose.connection.collections["users"].drop(function (err) {
      console.log("collection dropped");
    });
    mongoose.connection.collections["counters"].drop(function (err) {
      console.log("collection dropped");
    });

    mongoose.connection.collections["filemodels"].drop(function (err) {
      console.log("collection dropped");
    });
  });
});

describe("Testing files functionalities", () => {
  let token;

  beforeAll(async () => {
    const userData = {
      name: "John Doe",
      email: "doe@example.com",
      phone: "22222123",
      class: "INDP1 A",
      password: "demo12345",
    };

    const response = await request
      .post("/api/register")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(userData);

    token = response.body.access_token;
  });

  it("POST /api/file/add", async () => {
    const fileData = {
      title: "John Doe",
      matier: "22222123",
      class: "INDP1 A",
    };

    const response = await request
      .post('/api/file/add')
      .send(fileData)
      .set('Authorization', `Bearer ${token}`)
      //.attach('course', "../storage/course/read.me")
      .set('Accept', 'application/json');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: expect.any(String)
      })
    );

  });

  it("GET /api/file/0", async () => {
    const response = await request
      .get("/api/file/0")
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        count: expect.any(Number),
        files: expect.any(Array)
      })
    );
  });

  afterAll(() => {
    mongoose.connection.collections["users"].drop(function (err) {
      console.log("collection dropped");
    });
    mongoose.connection.collections["counters"].drop(function (err) {
      console.log("collection dropped");
    });

    mongoose.connection.collections["filemodels"].drop(function (err) {
      console.log("collection dropped");
    });
  });
});
