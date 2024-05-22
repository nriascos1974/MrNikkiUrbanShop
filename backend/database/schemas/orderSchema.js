const { Schema } = require("mongoose");
const boughtProductSchema = Schema({
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    ammount: Number,
    state: {
        type: String,
        enum: ["comprado", "entregado"],
        default: "comprado"
    }
})

const orderSchema = Schema({
    id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [boughtProductSchema],
    creationdate: Date,
    state: {
        type: String,
        enum: ["en curso", "finalizada"],
        default: "en curso"
    },
    totalprice: Number
}, { versionKey: false })

module.exports = orderSchema