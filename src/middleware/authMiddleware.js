const otpUtils = require("../utils/otpUtils");

function validateOTP(req, res, next) {
  const { secret } = req.user; // Assuming user object is available in request

  if (!otpUtils.verifyOTP(secret, req.body.token)) {
    return res.status(401).json({ message: "Invalid OTP" });
  }

  next();
}

module.exports = { validateOTP };
