const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => res.status(400).send(err));
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(result => res.status(201).send(result))
    .catch(err => res.status(400).send(err));
});
app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});
