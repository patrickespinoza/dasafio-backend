const createError = require("http-errors");
const encrypt = require("../lib/encrypt");
const User = require("../models/user.models");

async function create(userData) {
  const userFound = await User.findOne({ email: userData.email });
  if (userFound) {
    // throw new Error("Email already in use");
    throw createError(409, "Email already in use");
  }

  userData.password = await encrypt.encrypt(userData.password);

  const newUser = await User.create(userData);
  return newUser;
}

async function getAll() {
  const allpost = await Posted.find().populate("user", "name");
  return allpost;
}

module.exports = {
  create,
  getAll,
};
