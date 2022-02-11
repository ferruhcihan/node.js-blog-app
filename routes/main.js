const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/blog", (req, res) => {
  Post.find({})
    .lean()
    .then((posts) => {
      console.log("posts", posts);
      res.render("pages/blog", { posts: posts });
    });
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

module.exports = router;
