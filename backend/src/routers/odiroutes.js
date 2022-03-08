const express = require("express");
const router = new express.Router();
const odicontroller = require("../controllers/odicontroller");

router.route("/odi")
.get(odicontroller.getOdi);

module.exports = router;