const mongoose = require("mongoose");

const userInfo = "User";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  profilePic: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  },
  password: {
    type: String,
    required: true,
  },
  createdata: {
    type: Date,
    default: Date.now,
  },
  updatedata: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(userInfo, schema);
