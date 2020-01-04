const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});
