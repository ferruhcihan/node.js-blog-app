const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const hostname = "localhost";
const port = 3000;

app.use(express.static("public"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/blog", (req, res) => {
  res.render("pages/blog");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/register", (req, res) => {
  res.render("pages/register");
});

app.listen(port, () => {
  console.log(`Server started on http://${hostname}:${port}/`);
});
