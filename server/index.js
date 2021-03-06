const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/todo");
const Item = require("./models/item");

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

app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find({}).then((result) => {
    return res.json(result);
  });
});

app.post("/api/todos", async (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.json({ error: err.message }));
});

app.post("/api/todos/:id", async (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.json({ error: err.message }));
});

app.patch("/api/todos", async (req, res) => {
  const todo = req.body;
  const post = await Todo.updateOne({ todoId: todo.todoId }, [
    { $set: { isDone: { $eq: [false, "$isDone"] } } },
  ]).then((result) => {
    return res.json(result);
  });
});

app.get("/api/todos/:id/items", async (req, res) => {
  const { id } = req.params;
  const post = await Item.find({ owner: id }).then((result) => {
    return res.json(result);
  });
});

app.get("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Todo.findOne({ todoId: id }).then((result) => {
    return res.json(result);
  });
});

app.get("/api", (_req, res) => {
  return res.json({ message: "You have reached the Todo Api" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.app = app;
