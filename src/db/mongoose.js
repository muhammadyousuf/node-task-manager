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

const me = new User({
  name: "Muhammad Yousuf",
  age: 24
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
