const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/blog", (req, res) => {
  res.render("pages/blog");
});

router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.get("/posts/new", (req, res) => {
  res.render("pages/addpost");
});

module.exports = router;
