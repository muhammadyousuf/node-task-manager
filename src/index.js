const app = require("./app");

const port = process.env.PORT;


app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});
