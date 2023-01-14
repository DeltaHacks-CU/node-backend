var express = require('express');
const pool = require('../db');
var router = express.Router();
var client = require('../db').pool;

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    pool.query('SELECT type_name FROM appdata;', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })

    // let allcoordinates = [req.body.lat, req.body.lng];
    // console.log(allcoordinates);
    // res.send({
    //     allcoordinates,
    //     result,
    //   });
  }
);
  
module.exports = router;
