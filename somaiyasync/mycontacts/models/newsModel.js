const mongoose = require("mongoose");

const newsfeedScheema = mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("NewsFeed", newsfeedScheema);
