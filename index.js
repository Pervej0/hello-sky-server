const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
require("dotenv").config();
const getTravels = require("./routes/travels.router");
const getSingleTravel = require("./routes/travels.router");
const getExplorePosts = require("./routes/explorePosts.router");
const getSingleExplorePost = require("./routes/explorePosts.router");
const postUsers = require("./routes/users.router");
const putUsers = require("./routes/users.router");

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database cloud
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sjbgh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    app.use(getTravels);
    app.use(getSingleTravel);
    app.use(getExplorePosts);
    app.use(getSingleExplorePost);
    app.use(postUsers);
    app.use(putUsers);
  } finally {
    // await client.close();
  }
};

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome To The Server Site");
});

app.listen(port, () => {
  console.log("Server is running on", port);
});
