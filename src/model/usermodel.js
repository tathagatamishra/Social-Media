// importing...
const mongoose = require("mongoose");

// model = name + schema
module.exports = mongoose.model(
  "user",
  new mongoose.Schema(
    {
      fname: {
        type: String,
        // required: true,
        trim: true,
      },
      lname: {
        type: String,
        // required: true,
        trim: true,
      },
      email: {
        type: String,
        // required: true,
        // unique: true,
        trim: true
      },
      password: {
        type: String,
        // required: true
      }
    },
    { timestamps: true }
  )
);