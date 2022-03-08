const express = require("express");
const router = new express.Router();
const fieldcontroller = require("../controllers/fieldcontroller");

router.route("/field")
.get(fieldcontroller.getField);

module.exports = router;