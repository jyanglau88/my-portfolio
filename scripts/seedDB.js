const mongoose = require("mongoose");
const db = require("../models");

// This file empties the ContactMe collection and inserts the ContactMes below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/myportfolio"
);

const petSeed = [
  {
    name: "Joe Lau",
    email: "jyanglau88@gmail.com",
    message: "Welcome to my website!",
    date: "11/24/2018"
  }
];

db.ContactMes
  .remove({})
  .then(() => db.ContactMes.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
