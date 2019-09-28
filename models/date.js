const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateSchema = new Schema({
  user: { type: String, required: true },
  date: { type: String, required: true }
});

const Date = mongoose.model("date", dateSchema);

module.exports = Date;
