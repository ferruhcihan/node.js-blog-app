const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.post("/register", (req, res) => {
  User.create(req.body, (error, user) => {
    res.redirect("/");
  });
});

module.exports = router;
