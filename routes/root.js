const express = require("express");
const router = express.Router();


router
    .route("/")
    .get((req, res) => res.sendFile(__dirname+"/main.ejs"))

module.exports = router;
