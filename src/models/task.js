const mongoose = require("mongoose");
const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true,
    trim: true
  },
  order: {
    type: Number,
    default: 1,
    validate(value) {
      if (value < 0) {
        throw new Error("Order must be positive");
      }
    }
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = Task;
