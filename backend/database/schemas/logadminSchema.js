const { Schema } = require("mongoose");

const logadminSchema = Schema({
    id: Schema.Types.ObjectId,
    salesbalance: { type: Number, default: 0 },
    salesorder: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    date: { type: Date, default: new Date() },
    newproducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    newusers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    newreviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    newquestions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    activeproducts: { type: Number, default: 0 },
    activeusers: { type: Number, default: 0 }

}, { versionKey: false })

module.exports = logadminSchema