const express = require("express");
const router = express.Router();
const {
  getTravels,
  getSingleTravel,
} = require("../controllers/travels.controllers");

router.get("/travels_destination", getTravels);
router.get("/travels_destination/:listId", getSingleTravel);

module.exports = router;
