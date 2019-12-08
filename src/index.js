const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const bcrypt = require("bcryptjs");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});

const myFunction = async () => {
  const password = "yousufPass";
  const passwordHash = await bcrypt.hash(password, 8);
  const match = await bcrypt.compare("yousufPass", passwordHash)
  console.log(password);
  console.log(passwordHash);
  console.log(match)
};
myFunction();
