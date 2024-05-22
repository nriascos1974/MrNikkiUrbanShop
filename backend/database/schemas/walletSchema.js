const { Schema } = require("mongoose");

const walletSchema = Schema({
    id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    pendingBalance: {
        type: Number,
        default: 0
    },

    receivableBalance: {
        type: Number,
        default: 0
    }

}, { versionKey: false })

module.exports = walletSchema