const mongoose = require("mongoose")
const mainProductSchema = require("../schemas/productSchema");

// Se crea el modelo Product
const Product = mongoose.model("Product", mainProductSchema)

module.exports = Product;