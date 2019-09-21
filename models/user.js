const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String, require: true, unique: true }
  //   Pete: potential to add password
});

const User = mongoose.model("BabyNeed", userSchema);

module.exports = User;
