const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    id: String,
    title: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
