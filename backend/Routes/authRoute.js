const express = require("express");
const { validateSignup } = require("../Middlewares/validate.middleware");
const router = express.Router();


router.get("/signup", validateSignup, )

module.exports = router;