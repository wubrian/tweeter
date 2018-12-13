"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const DataHelpersFactory = require("./lib/data-helpers.js");
const tweetsRoutes = require("./routes/tweets");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect to Mongo, and use mongodb
const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";
let DataHelpers;

MongoClient.connect(MONGODB_URI, function(err, db) {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // The `data-helpers` module provides an interface to the database of tweets.
  DataHelpers = DataHelpersFactory(db);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes(DataHelpers));

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});
