const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const Task = require("./models/task");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 5000;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// });

// app.use((req, res, next) => {
//   res.status(503).send("Due to maintaince problem server is down");
// });

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});

const main = async () => {
  // const task = await Task.findById("5e07678db169c100d8564cc6");
  // await task.populate("owner").execPopulate();
  // console.log("task", task.owner.toJSON());

  const user = await User.findById("5e036dfb08799016ec57d2af");
  await user.populate("tasks").execPopulate();
  console.log("task", user.tasks);
};
main();
