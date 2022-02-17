const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Category = require("../models/Category");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/blog", (req, res) => {
  Post.find({})
    .populate({ path: "author", model: User })
    .lean()
    .sort({ $natural: -1 })
    .then((posts) => {
      Category.aggregate([
        {
          $lookup: {
            from: "posts",
            localField: "_id",
            foreignField: "category",
            as: "posts",
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            num_of_posts: { $size: "$posts" },
          },
        },
      ]).then((categories) => {
        res.render("pages/blog", { posts: posts, categories: categories });
      });
    });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact");
});

module.exports = router;
