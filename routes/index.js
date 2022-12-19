const express = require("express");
const { verifyAuth } = require("../middlewares");
const router = express.Router();
const authRouter = require("./auth.router");
const productRouter = require("./product.router");

router.use("/auth", authRouter);
router.use("/product", productRouter);

module.exports = router;
