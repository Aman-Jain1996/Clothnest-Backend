const Product = require("../models");

const getAllProductsHandler = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ message: "Couldn't get products" });
  }
};

const getProductHandler = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    return res.status(200).json({ product });
  } catch (err) {
    return res.status(400).json({ message: "Couldn't get product details" });
  }
};

const postProductHandler = async (req, res) => {
  try {
    const { data } = req.body;
    await Product.insertMany(data);
    const products = await Product.find({});
    return res
      .status(201)
      .json({ message: "Products added successfully!!", products });
  } catch (err) {
    return res.status(500).json({ message: "Couldn't add products" });
  }
};

module.exports = {
  getAllProductsHandler,
  getProductHandler,
  postProductHandler,
};
