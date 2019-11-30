const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taske-manager";

// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect database");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Muhammad Yousuf",
    //     age: 22
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany([
    //   {
    //     name: "Muhammad Rafae",
    //     age: 25
    //   },
    //   {
    //     name: "Muhammad Raza",
    //     age: 22
    //   }],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops)
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Node JS Basic Video",
    //       completed: false
    //     },
    //     {
    //       description: "Hooks Learning",
    //       completed: true
    //     },
    //     {
    //       description: "Women App",
    //       completed: false
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert task");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").findOne({ _id: new ObjectID("5dda40397febd818d06280dc") }, (err, user) => {
    //   if (err) {
    //     console.log("unable to read data");
    //   }

    //     console.log(user);

    // });
    // db.collection("users")
    //   .find({ age: 25 })
    //   .toArray((err, user) => {
    //     if (err) {
    //       console.log("unable to read data");
    //     }

    //     console.log(user);
    //   });
    // db.collection("users")
    // .find({ age: 25 })
    // .count((err, count) => {
    //   if (err) {
    //     console.log("unable to read data");
    //   }

    //   console.log(count);
    // });
    // db.collection("tasks")
    // .find({ completed: false })
    // .toArray((err, task) => {
    //   if (err) {
    //     console.log("unable to read data");
    //   }

    //   console.log(task);
    // });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5dda4549c846a911f85ad8fa") },
    //   (err, task) => {
    //     if (err) {
    //       console.log("unable to read data");
    //     }

    //     console.log(task);
    //   }
    // );
    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("5dda43d71c535a109039e3dc") },
    //     {
    //       $set: {
    //         name: "ali"
    //       },
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log("result", result);
    //   })
    //   .catch(err => console.log(err));
    db.collection("tasks")
      .updateMany(
        { completed: true },
        {
          $set: {
            completed: false
          }
        }
      )
      .then(result => {
        console.log("result", result);
      })
      .catch(err => console.log(err));
  }
);
