const express = require("express");
require("./db/mongoose");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const Task = require("./models/task");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 5000;

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 5000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.endsWith(".pdf")) {
      return cb(new Error("Please upload PDF file"));
    }
    cb(undefined, true);
  }
});
app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server is up an running on port " + port);
});
