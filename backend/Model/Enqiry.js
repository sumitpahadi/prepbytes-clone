const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userquery = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  phone: {
    type: Number,
    required: true,
  },
  Query: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("queryform", userquery);
