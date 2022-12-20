const express = require("express");
const {
  getAddressHandler,
  postAddressHandler,
  updateAddressHandler,
  deleteAddressHandler,
  getAllOrdersHandler,
  postOrderHandler,
} = require("../controllers");
const router = express.Router();

router.route("/address").get(getAddressHandler).post(postAddressHandler);
router
  .route("/address/:id")
  .post(updateAddressHandler)
  .delete(deleteAddressHandler);

router.route("/orders").get(getAllOrdersHandler).post(postOrderHandler);

module.exports = router;
