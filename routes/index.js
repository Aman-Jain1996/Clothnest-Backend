const express = require("express");
const { verifyAuth } = require("../middlewares");
const router = express.Router();
const authRouter = require("./auth.router");

router.use("/auth", verifyAuth, authRouter);

module.exports = router;
