const express = require("express");
const {
  getAddressHandler,
  postAddressHandler,
  updateAddressHandler,
  deleteAddressHandler,
} = require("../controllers");
const router = express.Router();

router.route("/address").get(getAddressHandler).post(postAddressHandler);
router
  .route("/address/:id")
  .post(updateAddressHandler)
  .delete(deleteAddressHandler);

module.exports = router;
