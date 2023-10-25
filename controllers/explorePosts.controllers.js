const { travelsPostCollection } = require("../models/travels.model");
const objectId = require("mongodb").ObjectId;

exports.getExplorePosts = async (req, res) => {
  const query = await travelsPostCollection.find({}).toArray();
  res.send(query);
};

exports.getSingleExplorePost = async (req, res) => {
  const postId = req.params.postId;
  const query = { _id: new objectId(postId) };
  const data = await travelsPostCollection.findOne(query);
  res.send(data);
};
