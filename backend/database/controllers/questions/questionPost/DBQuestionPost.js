const Product = require("../../../models/product");
const Question = require("../../../models/question");
const User = require("../../../models/user");
const LogAdminController = require("../../admin/LogAdminController");

const DBQuestionPost = async (idUser, question, idProduct) => {
    try {
        const newQuestion = new Question(question)
        const updateUser = await User.findByIdAndUpdate(idUser, { $push: { questions: newQuestion._id } }, { returnDocument: "after" })
        const updateProduct = await Product.findByIdAndUpdate(idProduct, { $push: { questions: newQuestion._id } }, { returnDocument: "after" })
        newQuestion.user = idUser
        newQuestion.product = idProduct
        newQuestion.date = new Date()
        const response = await newQuestion.save()
        LogAdminController(newQuestion._id, null, "questions")
        return response
    } catch (error) {
        throw Error(error)
    }
}

module.exports = DBQuestionPost