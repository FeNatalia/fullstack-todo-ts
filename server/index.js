const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (_req, res) => {
  return res.json({ message: "You have reached the Todo Api" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports.app = app;
