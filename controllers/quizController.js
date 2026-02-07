const Level = require("../models/Level");
const Question = require("../models/Question");

// GET all levels (sorted by levelNumber)
const getLevels = async (req, res) => {
  try {
    const levels = await Level.find().sort({ levelNumber: 1 });
    return res.status(200).json(levels);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch levels" });
  }
};

// GET questions by levelId
const getQuestionsByLevel = async (req, res) => {
  try {
    const { levelId } = req.params;
    const questions = await Question.find({ levelId }).sort({ sequence: 1 });
    return res.status(200).json(questions);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};



// Export controllers
module.exports = {
  getLevels,
  getQuestionsByLevel
};
