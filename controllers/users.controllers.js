const { usersCollection } = require("../models/users.model");
const { use } = require("../routes/explorePosts.router");

exports.postUsers = async (req, res) => {
  const data = req.body;
  const result = await usersCollection.insertOne(data);
  res.json(result);
};

exports.putUsers = async (req, res) => {
  const data = req.body;
  const filter = { name: data.name, email: data.email };
  const options = { upsert: true };
  const update = { $set: filter };
  const result = await usersCollection.updateOne(filter, update, options);
  res.json(result);
};

exports.getUsers = async (req, res) => {
  const users = await usersCollection.find({}).toArray();
  res.send(users);
};
