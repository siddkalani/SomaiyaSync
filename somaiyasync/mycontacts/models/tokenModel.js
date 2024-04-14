const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now, expires: 3600 }, //1 hr
});

module.exports = mongoose.model("Token", tokenSchema);
