const mongoose = require("mongoose")
const sizeSchema = require("../schemas/sizeSchema");

// Se crea el modelo City
const Size = mongoose.model("Size", sizeSchema)

module.exports = Size;