const ObjectId = require("mongodb").ObjectId;
const { travelsCollection } = require("../models/travels.model");

exports.getTravels = async (req, res) => {
  const query = await travelsCollection.find({}).toArray();
  res.send(query);
};

exports.getSingleTravel = async (req, res) => {
  const listId = req.params.listId;
  const query = { _id: new ObjectId(listId) };
  const singleTravel = await travelsCollection.findOne(query);
  res.json(singleTravel);
};
