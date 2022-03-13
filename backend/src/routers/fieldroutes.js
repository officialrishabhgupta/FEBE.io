const express = require("express");
const router = new express.Router();
const getController = require("../controllers/getController");

router.route("/getfield")
.get(getController.getField);

module.exports = router;