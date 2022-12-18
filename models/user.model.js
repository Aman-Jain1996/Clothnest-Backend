const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    id: String,
    title: String,
    listPrice: Number,
    sellPrice: Number,
    imageUrl: String,
    quantity: Number,
  },
  { timestamps: true }
);

const wishListSchema = new Schema(
  {
    id: String,
    title: String,
    listPrice: Number,
    sellPrice: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

const ordersSchema = new Schema(
  {
    id: String,
    items: [cartSchema],
    orderDate: Date,
    deliveryAddress: addressSchema,
    amountPaid: Number,
    paymentId: String,
  },
  { timestamps: true }
);

const addressSchema = new Schema(
  {
    id: String,
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

const userSchema = new Schema(
  {
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    cart: [cartSchema],
    address: [addressSchema],
    orders: [ordersSchema],
    wishList: [wishListSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
