const { ObjectId } = require("mongodb");
const { bookingCollection } = require("../models/booking.model");

exports.postBookingUsers = async (req, res) => {
  const data = req.body;
  const result = await bookingCollection.insertOne(data);
  res.json(result);
};

exports.getBookingUsers = async (req, res) => {
  const bookedUser = await bookingCollection.find({}).toArray();
  res.send(bookedUser);
};

exports.getBookedFlight = async (req, res) => {
  const email = req.params.email;
  const filter = { email };
  const result = await bookingCollection.find(filter).toArray();
  res.send(result);
};

exports.deleteBookedFlight = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await bookingCollection.deleteOne(filter);
  res.json(result);
};

exports.putBookedFlight = async (req, res) => {
  const st = req.body;
  const id = req.params.id;
  // const filter = {_id: new ObjectId(id)}
  console.log(id, st);
};
