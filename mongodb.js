const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taske-manager";

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
    //     name: "Muhammad Yousuf",
    //     age: 24
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops)
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

    db.collection("tasks").insertMany(
      [
        {
          description: "Node JS Basic Video",
          completed: false
        },
        {
          description: "Hooks Learning",
          completed: true
        },
        {
          description: "Women App",
          completed: false
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert task");
        }
        console.log(result.ops);
      }
    );
  }
);
