const express = require("express");
const {
  postUsers,
  putUsers,
  getUsers,
} = require("../controllers/users.controllers");
const router = express.Router();

router.post("/users", postUsers);
router.put("/users", putUsers);
router.get("/users", getUsers);

module.exports = router;
