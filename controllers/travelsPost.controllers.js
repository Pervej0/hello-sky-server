const { travelsPostCollection } = require("../models/travels.model");

exports.getTravelsPost = async (req, res) => {
  const query = await travelsPostCollection.find({}).toArray();
  res.send(query);
};
