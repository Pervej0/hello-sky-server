const express = require("express");
const { postUsers, putUsers } = require("../controllers/users.controllers");
const router = express.Router();

router.post("/users", postUsers);
router.put("/users", putUsers);

module.exports = router;
