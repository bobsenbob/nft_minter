const express = require('express');
const router = express.Router();
const db = require('../pool.js');

router.get("/", function(req, res, next) {
    db.query(
        'SELECT * FROM Images', (err, results) => {
            if(err) {
                console.log(err.stack)
            } else {
                console.log("Sending")
                res.status(200).json(results.rows);
            }
        }
        
    );
});

router.post("/", function(req, res, next) {
    const text = `INSERT INTO Images(url, date) VALUES ($1, $2)`;
    const values = [req.body.url , req.body.date];
   console.log(req.body.url)
    db.query(
        text, values, (err, results) => {
            if(err) {
                console.log(err.stack)
            } else {
                console.log("Link Recieved")
                res.send("Link Recieved")
            }
        }
        
    );
});

module.exports = router;