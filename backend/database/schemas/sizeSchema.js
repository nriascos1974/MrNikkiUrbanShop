const { Schema } = require("mongoose")

const sizeSchema = new Schema({
    id: Schema.Types.ObjectId,
    size: {
        type: String,
        enum: ["S", "M", "L", "XL"]
    },
    stock: Number,
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
}, { versionKey: false })


module.exports = sizeSchema