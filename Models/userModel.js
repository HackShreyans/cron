const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  dateTime: {
    type: String
  }
});

module.exports = mongoose.model("User", userModel);
