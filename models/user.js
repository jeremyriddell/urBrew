const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  password: {type: String }
});

const User = mongoose.model("user", userSchema);

module.exports = User;