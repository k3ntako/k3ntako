const express = require("express");

const EmailController = require("./controllers/EmailController");

let router = express.Router();

router.route("/emails").post(EmailController.send);

module.exports = router;
