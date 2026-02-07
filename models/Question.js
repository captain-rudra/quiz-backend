const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  levelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Level",
    required: true,
  },

  sequence: {
    type: Number,
    required: true,
  },

  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  imageUrl: String,
  videoUrl: String,
});

module.exports = mongoose.model("Question", QuestionSchema);

//schema for questions