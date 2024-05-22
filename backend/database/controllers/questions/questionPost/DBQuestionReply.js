const Product = require("../../../models/product");
const Question = require("../../../models/question");
const User = require("../../../models/user");

const DBQuestionReply = async (idUser, reply, idQuestion) => {
    try {
        const questionAnswer = Question.findByIdAndUpdate(idQuestion,
            {
                answer:
                {
                    ...reply,
                    user: idUser
                }
            },
            { returnDocument: "after" })
        return questionAnswer
    } catch (error) {
        throw Error(error)
    }
}

module.exports = DBQuestionReply