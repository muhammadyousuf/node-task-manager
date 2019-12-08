require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5de950883dcf3c22c85d4125", { age: 3 })
//   .then(res => {
//     console.log(res);
//     return User.countDocuments({ age: 3 });
//   })
//   .then(count => console.log("count ", count))
//   .catch(err => console.log("err", err));

const UpdateTaskAndCount = async (id, age) => {
   await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

UpdateTaskAndCount("5de950883dcf3c22c85d4125", 8)
  .then(count => console.log("count", count))
  .catch(err => console.log("err", err));
