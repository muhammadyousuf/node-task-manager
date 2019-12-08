const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
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

router.patch("/tasks/:id", async (req, res) => {
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

router.delete("/tasks/:id", async (req, res) => {
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

module.exports = router;