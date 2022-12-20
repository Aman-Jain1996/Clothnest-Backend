const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: String,
    description: String,
    listPrice: Number,
    sellPrice: Number,
    rating: String,
    imageUrl: String,
    categoryName: String,
    newArrival: { type: Boolean, default: false },
    isTrending: { type: Boolean, default: false },
    isOutOfStock: { type: Boolean, default: false },
    totalRatingsCount: { type: Number, default: 50 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
