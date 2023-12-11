const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/generate-otp", authController.generateOTP);
router.post("/verify-otp", authController.verifyOTP);

module.exports = router;
