const { database } = require("./server");

exports.bookingCollection = database.collection("booked_results");
