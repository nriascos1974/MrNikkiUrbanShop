const mongoose = require("mongoose")
const orderSchema = require("../schemas/orderSchema")

const Order = mongoose.model("Order", orderSchema)

module.exports = Order