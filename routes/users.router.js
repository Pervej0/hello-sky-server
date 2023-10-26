const express = require("express");
const {
  postUsers,
  putUsers,
  getUsers,
  putAdminRole,
  getAdminRole,
} = require("../controllers/users.controllers");
const router = express.Router();

router.post("/users", postUsers);
router.put("/users", putUsers);
router.get("/users", getUsers);
router.put("/admin", putAdminRole);
router.get("/admin/:email", getAdminRole);

module.exports = router;
