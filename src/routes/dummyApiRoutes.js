const express = require("express");
const dummyApiController = require("../controllers/dummyApiController");

const router = express.Router();

router.use("/dummy", dummyApiController);

module.exports = router;
