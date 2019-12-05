const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/taske-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive");
      }
    }
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password does not conatin password");
      }
    }
  }
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

const me = new User({
  name: "    Muhammad Yousuf    ",
  email: "     MYOUSUF@gmail.com     ",
  password: "pa125445D"
});
me.save()
  .then(() => {
    console.log("====================================");
    console.log(me);
    console.log("====================================");
  })
  .catch(err => {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
  });
