const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = process.env.DB_URI

// connecting to mongodb
mongoose.connect(DB_URI).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
