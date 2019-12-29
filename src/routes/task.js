const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      owner: req.user._id
    });
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks", auth, async (req, res) => {
  const match = {};
  if (req.query.completed) {
    match.completed = req.query.completed === "true";
  }
  try {
    await req.user
      .populate({
        path: "tasks",
        match
      })
      .execPopulate();
    res.status(200).send(req.user.tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send([]);
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
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
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send([]);
    }
    updates.forEach(update => (task[update] = req.body[update]));
    task.save();
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOneAndDelete({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send([]);
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
