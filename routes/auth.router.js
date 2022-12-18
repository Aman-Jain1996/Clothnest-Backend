const express = require("express");
const { loginHandler, signUpHandler } = require("../controllers");
const router = express.Router();

router.post("/login", loginHandler);
router.post("/signUp", signUpHandler);

module.exports = router;
