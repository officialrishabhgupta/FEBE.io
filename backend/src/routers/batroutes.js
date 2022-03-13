const express = require("express");
const router = new express.Router();
const getController = require("../controllers/getController");

router.route("/getbat")
.get(getController.getBat);

module.exports = router;