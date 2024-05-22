const { Schema } = require("mongoose");

const shoppingCartSchema = Schema({
  id: Schema.Types.ObjectId,
  products: [{ product: { type: Schema.Types.ObjectId, ref: "Product" }, ammount: Number }],
  totalprice: { type: Number, default: 0 }
})

const userSchema = Schema({
  id: Schema.Types.ObjectId,
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  goodcalification: {
    type: Number,
    default: 0,
  },
  neutralcalification: {
    type: Number,
    default: 0,
  },
  badcalification: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  state: {
    type: String,
    enum: ["activo", "bloqueado", "desactivado"],
    default: "activo",
  },
  verified: Boolean,
  codeverified: Number,
  recoverycode: String,
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  registrationdate: Date,
  city: { type: Schema.Types.ObjectId, ref: "City" },
  role: { type: Schema.Types.ObjectId, ref: "Role" },
  shoppingCart: shoppingCartSchema,
  reviewReceived: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  reviewPost: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  purchased: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  wallet: { type: Schema.Types.ObjectId, ref: "Wallet" }
}, { versionKey: false });

module.exports = userSchema;
