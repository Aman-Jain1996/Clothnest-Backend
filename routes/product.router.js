const express = require("express");
const {
  getAllProductsHandler,
  postProductHandler,
  getProductHandler,
} = require("../controllers");
const router = express.Router();

router.route("/").get(getAllProductsHandler).post(postProductHandler);

router.route("/:id").get(getProductHandler);

module.exports = router;
