const createError = require("http-errors");
const Posted = require("../models/post.models");

async function createPost(postData) {
  const postFound = await Posted.findOne({
    title: postData.title,
    user: postData.user,
  });
  if (postFound) {
    throw createError(409, "Post already in use");
  }

  const createNewPost = await Posted.create(postData);
  return createNewPost;
}

async function getAll() {
  const allpost = await Posted.find().populate("user", "name");
  console.log(allpost);
  return allpost;
}

async function getById(id) {
  const post = await Posted.findById(id).populate("user", "name");
  if (!post) {
    throw createError(404, "Post not found");
  }
  return post;
}

module.exports = {
  createPost,
  getAll,
  getById,
};
