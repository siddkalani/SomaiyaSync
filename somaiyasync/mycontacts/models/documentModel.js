const mongoose = require("mongoose");

const docScheema = mongoose.Schema({
  url: String,
  branch: String,
  sem: String,
  topic: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Documents", docScheema);
