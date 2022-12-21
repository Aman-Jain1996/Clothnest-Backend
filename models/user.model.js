const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    title: String,
    listPrice: Number,
    sellPrice: Number,
    imageUrl: String,
    quantity: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const wishListSchema = new Schema(
  {
    title: String,
    listPrice: Number,
    sellPrice: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

const addressSchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
    pincode: String,
    street: String,
    city: String,
    state: String,
  },
  { timestamps: true }
);

const ordersSchema = new Schema(
  {
    items: [cartSchema],
    orderDate: Date,
    deliveryAddress: addressSchema,
    amountPaid: Number,
    paymentId: String,
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isAdmin: { type: Boolean, default: false },
    cart: [cartSchema],
    address: [addressSchema],
    orders: [ordersSchema],
    wishlist: [wishListSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
