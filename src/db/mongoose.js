const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/taske-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});
const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true
  },
  orders: {
    type: Number,
    default: 1
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const myTask = new Task({
  title: "First Todo"
});

myTask
  .save()
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));

// const me = new User({
//   name: "Muhammad Yousuf",
//   age: 24
// });
// me.save()
//   .then(() => {
//     console.log("====================================");
//     console.log(me);
//     console.log("====================================");
//   })
//   .catch(err => {
//     console.log("====================================");
//     console.log(err);
//     console.log("====================================");
//   });
