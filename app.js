const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const moment = require("moment");

mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(fileUpload());

app.use(express.static("public"));

const hbs = exphbs.create({
  helpers: {
    generateDate(date, format) {
      return moment(date).format(format);
    },
  },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const main = require("./routes/main");
const posts = require("./routes/posts");

app.use("/", main);
app.use("/posts", posts);

app.listen(port, () => {
  console.log(`Server started on http://${hostname}:${port}/`);
});
