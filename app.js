const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const main = require("./routes/main");
app.use("/", main);

app.listen(port, () => {
  console.log(`Server started on http://${hostname}:${port}/`);
});
