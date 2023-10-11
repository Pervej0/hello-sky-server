const express = require("express");
const { getTravelsPost } = require("../controllers/travelsPost.controllers");
const router = express.Router();

router.get("/travels_post", getTravelsPost);

module.exports = router;
