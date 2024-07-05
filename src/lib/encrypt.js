const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10;

async function hash(text) {
  return await bcrypt.hash(text, SALT_ROUNDS);
}

function compare(plainText, hash) {
  return bcrypt.compare(plainText, hash);
}

module.exports = { hash, compare };
