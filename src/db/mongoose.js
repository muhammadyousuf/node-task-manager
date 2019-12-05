const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/taske-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


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

// const myTask = new Task({
//   title: "First Todo",
//   order: 31
// });

// myTask
//   .save()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.log(err));

// const me = new User({
//   name: "    Muhammad Yousuf    ",
//   email: "     MYOUSUF@gmail.com     ",
//   password: "pa125445D"
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
