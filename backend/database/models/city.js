const mongoose = require("mongoose")
const citySchema = require("../schemas/citySchema");

// Se crea el modelo City
const City = mongoose.model("City", citySchema)

module.exports = City;