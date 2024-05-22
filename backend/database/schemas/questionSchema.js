const { Schema } = require("mongoose");

const answerSchema = new Schema({
    id: Schema.Types.ObjectId,
    state: {
        type: String,
        enum: ["active", "inactivated", "blocked"],
        default: "active"
    },
    answer: {
        type: String,
        required: true,
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    date: Date
}, { versionKey: false })

const questionSchema = new Schema({
    id: Schema.Types.ObjectId,
    date: Date,
    question: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: ["active", "inactivated", "blocked"],
        default: "active"
    },
    answer: answerSchema,
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" }
}, { versionKey: false })

module.exports = questionSchema