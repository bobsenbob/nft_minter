var express = require("express");
var router = express.Router();
const db = require('../pool.js');

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;