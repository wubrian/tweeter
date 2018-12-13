"use strict";

// const MongoClient = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");

const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "tweeter" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> Refactored and wrapped as new, tweet-specific function:

  function getTweets(callback) {
    db.collection("tweets").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets);
    });
  }

  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:");
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  });
/*
  // ==> Let's "get all the tweets". In Mongo-speak, we "find" them.
  db.collection("tweets").find({}, (err, result) => {
    //error handler
    if(err) throw err;

    // RTFM (Read The Fantastic Manual), Cursor can implement methods: Each, Next, toArray

    // Use Each method to iterate on the cursor to get results, one at a time:
    console.log("for each item yielded by the cursor:");
    result.each((err, item) => console.log(" ", item));

    // Use toArray method to slurp the items into an array:
    result.toArray((err, resultsArray) => {
      if (err) throw err;

      console.log("results.toArray:", resultsArray);
    });

    //just one line
    console.log("results array: ", result);

    // ==> At the end, we close the connection:
    db.close();

  });
*/
});