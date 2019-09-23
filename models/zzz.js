const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zzzSchema = new Schema({
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  details: String
});

const Zzz = mongoose.model("Zzz", zzzSchema);

module.exports = Zzz;
