const { Schema } = require("mongoose")

const roleSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId
    },
    role: {
        type: String,
        required: true

    }

}, { versionKey: false })

module.exports = roleSchema