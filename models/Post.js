const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, default: true },
  content: { type: String, default: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
