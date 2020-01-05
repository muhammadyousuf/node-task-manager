const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../src/app");
const User = require("../src/models/user");

const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Muhammad Rafae",
  email: "rafaekhatri@gmail.com",
  password: "HeyWhat1!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should signup new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Muhammad Yousuf",
      email: "muhammadyousuf328@gmail.com",
      password: "MyPass777!"
    })
    .expect(201);
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  expect(response.body).toMatchObject({
    user: {
      name: "Muhammad Yousuf",
      email: "muhammadyousuf328@gmail.com"
    },
    token: user.tokens[0].token
  });
  expect(user.password).not.toBe("MyPass777!");
});

test("should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

test("should not login nonexisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "sh43ajs"
    })
    .expect(400);
});

test("should get user  for profile", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("should not get profile unathentication user", async () => {
  await request(app)
    .get("/users/me")
    .send()
    .expect(401);
});

test("should delete user  for profile", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test("should not delete profile unathentication user", async () => {
  await request(app)
    .delete("/users/me")
    .send()
    .expect(401);
});
