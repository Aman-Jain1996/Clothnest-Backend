const express = require("express");
const { verifyAuth } = require("../middlewares");
const router = express.Router();
const authRouter = require("./auth.router");
const productRouter = require("./product.router");
const userRouter = require("./user.router");
const categoryRouter = require("./category.router");

router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/user", verifyAuth, userRouter);
router.use("/category", categoryRouter);

module.exports = router;
