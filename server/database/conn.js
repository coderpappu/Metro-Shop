const mongoose = require("mongoose");

async function connectHepler() {
  const db = mongoose.connect("mongodb://127.0.0.1:27017/Products");

  return db;
}

module.exports = connectHepler;
