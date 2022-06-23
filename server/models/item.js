const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
