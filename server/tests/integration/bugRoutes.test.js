const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const Bug = require("../../src/models/Bug");
const bugRoutes = require("../../src/routes/bugRoutes");

const app = express();
app.use(express.json());
app.use("/api/bugs", bugRoutes);

// Mock MongoDB connection
beforeAll(async () => {
  const url = "mongodb://127.0.0.1/bugtracker-test";
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("Bug API", () => {
  it("should create a bug", async () => {
    const res = await request(app)
      .post("/api/bugs")
      .send({ title: "Test Bug", description: "Bug details" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Bug");
  });

  it("should get bugs", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
