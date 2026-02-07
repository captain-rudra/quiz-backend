const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");
const {
  getLevels,
  getQuestionsByLevel
} = quizController;

router.get("/levels", getLevels);
router.get("/levels/:levelId/questions", getQuestionsByLevel);



module.exports = router;
