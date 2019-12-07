require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5de952d852814f2b507e75df")
  .then(res => {
    console.log(res);
    return Task.countDocuments({ completed: false });
  })
  .then(count => console.log("count ", count))
  .catch(err => console.log("err", err));
