const otpUtils = require("../utils/otpUtils");

exports.generateOTP = (req, res) => {
  const { secret, otpUri } = otpUtils.generateOTP();
  res.json({ otpUri, secret });
};

exports.verifyOTP = (req, res) => {
  // Your OTP verification logic here
  res.json({ message: "OTP verification successful" });
};
