const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    title: String,
    imageURL: String,
    altText: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
