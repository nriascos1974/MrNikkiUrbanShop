const logadminSchema = require("../schemas/logadminSchema");
const mongoose = require("mongoose")

const LogAdmin = mongoose.model("LogAdmin", logadminSchema)

module.exports = LogAdmin