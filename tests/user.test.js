const request = require("supertest");
const app = require("../src/app");

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
