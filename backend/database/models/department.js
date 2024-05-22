const mongoose = require("mongoose")
const departmentSchema = require("../schemas/departmentSchema");

// Se crea el modelo Department
const Department = mongoose.model("Department", departmentSchema)

module.exports = Department;