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

module.exports = {
  loginHandler,
  signUpHandler,
  resetHandler,
  getAllProductsHandler,
  getProductHandler,
  postProductHandler,
};
