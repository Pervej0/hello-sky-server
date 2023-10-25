const { database } = require("./server");

exports.usersCollection = database.collection("helloSky_users");
