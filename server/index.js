const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

app.use(cors());

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/todoApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo connection is open!");
  })
  .catch((err) => {
    console.log("Mongo connection error!");
    console.log(err);
  });

app.get("/api", (_req, res) => {
  return res.json({ message: "You have reached the Todo Api" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.app = app;
