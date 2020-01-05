const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
  name: "Muhammad Rafae",
  email: "rafaekhatri11@gmail.com",
  password: "HeyWhat1!"
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should signup new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Muhammad Yousuf",
      email: "muhammadyousuf328@gmail.com",
      password: "MyPass777!"
    })
    .expect(201);
});

test("should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});


test("should not login nonexisting user", async () => {
    await request(app)
      .post("/users/login")
      .send({
        email: userOne.email,
        password: 'sh43ajs'
      })
      .expect(400);
  });