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
};
