const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema({
  levelNumber: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Level", LevelSchema);

//schema for game levels