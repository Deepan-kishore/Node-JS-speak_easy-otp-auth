const speakeasy = require("speakeasy");

function generateOTP() {
  const secret = speakeasy.generateSecret({ length: 20 });
  const otpUri = speakeasy.otpauthURL({
    secret: secret.base32,
    label: "YourApp",
    algorithm: "sha1",
  });

  return { secret, otpUri };
}

function verifyOTP(secret, token) {
  return speakeasy.totp.verify({
    secret: secret.ascii,
    encoding: "ascii",
    token,
  });
}

module.exports = { generateOTP, verifyOTP };
