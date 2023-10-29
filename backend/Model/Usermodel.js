const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userdataSchema = new Schema({
  username: {
    type: String,
    required: true,
    maxlength: [20, "name is too long"],
    trim: true,
    unique: true,
  },
  email: { type: String, required: true, trim: true, unique: true },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "password should be atleast 8 character"],
  },
  collegename: {
    type: String,
    required: true,
  
  },
  passingyear:{
    type:Number,
    required:true
  }

});

module.exports = mongoose.model("Userdata", userdataSchema);