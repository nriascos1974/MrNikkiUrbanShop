const { Schema } = require("mongoose")

const productSchema = new Schema({
    name: String,
    images: [{ type: String }],
    description: String,
    price: Number,
    active: {
        type: String,
        enum: ["en venta", "agotado", "bloqueado", "desactivado"],
        default: "en venta"
    },
    size: {
        type: String,
        enum: ["S", "M", "L", "XL"]
    },
    label: {
        type: String,
        enum: ["destacado", "oferta", "ninguno"]
    },
    Brand: String,
    stock: Number,
    category: String,
    subcategory: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    purchasedBy: [{ user: { type: Schema.Types.ObjectId, ref: "User" }, ammount: Number }],
    //send: { type: Schema.Types.ObjectId, ref: "Send" },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    publicationdate: Date

}, { versionKey: false })



module.exports = productSchema