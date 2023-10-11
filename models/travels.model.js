const { database } = require("./server");

exports.travelsCollection = database.collection("travels_destination");
exports.travelsPostCollection = database.collection("travels_post");
