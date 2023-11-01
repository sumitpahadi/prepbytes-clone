const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const callback_form = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  highest_degree: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  passing_out: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("callback", callback_form);
