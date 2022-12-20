const express = require("express");
const {
  getAddressHandler,
  postAddressHandler,
  updateAddressHandler,
  deleteAddressHandler,
  getAllOrdersHandler,
  postOrderHandler,
  getCartItemsHandler,
  addItemToCartHandler,
  clearCartHandler,
  updateCartItemHandler,
  removeItemFromCartHandler,
} = require("../controllers");
const router = express.Router();

router.route("/address").get(getAddressHandler).post(postAddressHandler);
router
  .route("/address/:id")
  .post(updateAddressHandler)
  .delete(deleteAddressHandler);

router.route("/orders").get(getAllOrdersHandler).post(postOrderHandler);

router.route("/cart").get(getCartItemsHandler).post(addItemToCartHandler);
router
  .route("/cart/:id")
  .post(updateCartItemHandler)
  .delete(removeItemFromCartHandler);
router.route("/cart/clear").delete(clearCartHandler);

module.exports = router;
