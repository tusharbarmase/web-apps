const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");
const router = express.Router();

//signup

router.post("/signup", signupUser);

//login

router.post("/login", loginUser);

module.exports = router;
