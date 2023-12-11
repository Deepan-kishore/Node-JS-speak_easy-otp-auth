const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/secure-endpoint", authMiddleware.validateOTP, (req, res) => {
  // Access granted for authenticated users
  res.json({ message: "Access granted to secure endpoint" });
});

module.exports = router;
