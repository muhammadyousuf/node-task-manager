require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5de950883dcf3c22c85d4125", { age: 3 })
  .then(res => {
    console.log(res);
    return User.countDocuments({ age: 3 });
  })
  .then(count => console.log("count ", count))
  .catch(err => console.log("err", err));
