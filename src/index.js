const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});

const myFunction = async () => {
  const token = jwt.sign({ _id: "1234" }, "secret", {expiresIn:'7 days'});
  console.log("token", token);

  const data = jwt.verify(token, "secret");
  console.log('data', data)
};
myFunction();
