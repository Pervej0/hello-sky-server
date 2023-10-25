const express = require("express");
const {
  getExplorePosts,
  getSingleExplorePost,
} = require("../controllers/explorePosts.controllers");

const router = express.Router();

router.get("/travels_post", getExplorePosts);
router.get("/travels_post/:postId", getSingleExplorePost);

module.exports = router;
