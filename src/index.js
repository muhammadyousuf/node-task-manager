const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send([]);
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send([]);
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowUpdates = ["name", "email", "age", "password"];
  const isValidOperator = updates.every(update =>
    allowUpdates.includes(update)
  );
  if (!isValidOperator) {
    return res.status(400).send({ error: "Invalid Updates!" });
  }
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).send([]);
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowUpdates = ["order", "completed", "title"];
  const isValidOperator = updates.every(update =>
    allowUpdates.includes(update)
  );
  if (!isValidOperator) {
    return res.status(400).send({ error: "Invalid Updates!" });
  }
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      return res.status(404).send([]);
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send([]);
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return res.status(404).send([]);
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});
