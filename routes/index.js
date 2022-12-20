const express = require("express");
const { verifyAuth } = require("../middlewares");
const router = express.Router();
const authRouter = require("./auth.router");
const productRouter = require("./product.router");
const userRouter = require("./user.router");

router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);

module.exports = router;
