const express = require("express");
const {
  postBookingUsers,
  getBookingUsers,
  getBookedFlight,
  deleteBookedFlight,
  putBookedFlight,
} = require("../controllers/bookings.controllers");
const router = express.Router();

router.post("/bookings", postBookingUsers);
router.get("/bookings", getBookingUsers);
router.get("/bookings/:email", getBookedFlight);
router.delete("/bookings/:id", deleteBookedFlight);
router.put("/bookings/:id", putBookedFlight);

module.exports = router;
