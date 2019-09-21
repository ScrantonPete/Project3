const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const changeMeSchema = new Schema({
  time: { type: String, required: true },
  details: String
});

const Change = mongoose.model("Book", changeMeSchema);

module.exports = Change;