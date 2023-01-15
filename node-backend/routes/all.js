var express = require('express');
var router = express.Router();
const pool = require('../db');

router.get('/', function(req, res, next) {
    pool.query('SELECT * FROM appdata;', (error, results) => {
        if (error) {
            console.log(error);
            res.status(400);
            throw error;
        } else {
            res.status(200).json(results.rows);
        }
    });
});
  
  module.exports = router;