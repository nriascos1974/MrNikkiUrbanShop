const questionSchema = require("../schemas/questionSchema");
const mongoose = require("mongoose")

const Question = mongoose.model("Question", questionSchema)

module.exports = Question