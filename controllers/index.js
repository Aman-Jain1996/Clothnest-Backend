const {
  loginHandler,
  signUpHandler,
  resetHandler,
} = require("./auth.cotroller");

const {
  getAllProductsHandler,
  getProductHandler,
  postProductHandler,
} = require("./product.controller");

const {
  getAddressHandler,
  postAddressHandler,
  deleteAddressHandler,
  updateAddressHandler,
} = require("./address.controller");

const {
  getAllCategoryHandler,
  getCategoryHandler,
  postCategoryHandler,
} = require("./category.controller");

const { getAllOrdersHandler, postOrderHandler } = require("./order.controller");

const {
  getCartItemsHandler,
  addItemToCartHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
  clearCartHandler,
} = require("./cart.controller");

module.exports = {
  loginHandler,
  signUpHandler,
  resetHandler,
  getAllProductsHandler,
  getProductHandler,
  postProductHandler,
  getAddressHandler,
  postAddressHandler,
  deleteAddressHandler,
  updateAddressHandler,
  getAllCategoryHandler,
  getCategoryHandler,
  postCategoryHandler,
  getAllOrdersHandler,
  postOrderHandler,
  getCartItemsHandler,
  addItemToCartHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
  clearCartHandler,
};
