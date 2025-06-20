const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  carname: {
    type: String,
    required: true,
  },
  carcolor: {
    type: String,
    required: true,
  },
  carmodel: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
