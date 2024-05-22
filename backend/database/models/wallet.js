const mongoose = require("mongoose")
const walletSchema = require("../schemas/walletSchema");

const Wallet = mongoose.model("Wallet", walletSchema)

module.exports = Wallet