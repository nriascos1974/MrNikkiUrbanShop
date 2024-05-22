const mongoose = require("mongoose")
const roleSchema = require("../schemas/roleSchema");

const Role = mongoose.model("Role", roleSchema)

module.exports = Role