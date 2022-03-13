const express = require("express");
const router = new express.Router();
const getController = require("../controllers/getController");

router.route("/getodi")
.get(getController.getOdi);

module.exports = router;