var express = require('express');
const pool = require('../db');
var router = express.Router();
var client = require('../db').pool;

router.post('/', function(req, res, next) {
    console.log(req.body);
    pool.query('SELECT type_name FROM appdata;', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
  }
);
  
module.exports = router;
