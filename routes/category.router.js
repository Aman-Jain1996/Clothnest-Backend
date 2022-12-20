const express = require("express");
const {
  getAllCategoryHandler,
  postCategoryHandler,
  getCategoryHandler,
} = require("../controllers/category.controller");
const router = express.Router();

router.route("/").get(getAllCategoryHandler).post(postCategoryHandler);
router.route("/:id").get(getCategoryHandler);

module.exports = router;
