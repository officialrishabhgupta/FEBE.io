const express = require("express");
const router = new express.Router();
const batcontroller = require("../controllers/batcontroller");

router.route("/bat")
.get(batcontroller.getBat);

module.exports = router;