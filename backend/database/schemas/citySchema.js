const { Schema } = require("mongoose")
// Definir el esquema para la colección de municipios
const citySchema = new Schema({
    codeDane: String,
    city: String,
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }
}, { versionKey: false });

module.exports = citySchema;