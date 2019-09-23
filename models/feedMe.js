const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedMeSchema = new Schema({
  time: { type: String, required: true },
  details: String
});

const Feed = mongoose.model("Feed", feedMeSchema);

module.exports = Feed;
