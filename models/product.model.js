const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: String,
    title: String,
    description: String,
    listPrice: Number,
    sellPrice: Number,
    rating: String,
    imageUrl: String,
    categoryName: String,
    newArrival: Boolean,
    isTrending: Boolean,
    isOutOfStock: Boolean,
    totalRatingsCount: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
