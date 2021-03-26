const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StreamSchema = new Schema({
  title: String,
  description: String,
  userId: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Stream = mongoose.model("Stream", StreamSchema);
