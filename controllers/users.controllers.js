const { usersCollection } = require("../models/users.model");

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

exports.putAdminRole = async (req, res) => {
  const data = req.body;
  const filter = { email: data.email };
  const update = { $set: { role: data.role } };
  const result = await usersCollection.updateOne(filter, update);
  res.json(result);
};

exports.getAdminRole = async (req, res) => {
  const email = req.params.email;
  const query = { email };
  const result = await usersCollection.findOne(query);
  res.json(result);
};
