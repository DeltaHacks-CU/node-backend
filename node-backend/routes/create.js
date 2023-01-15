var express = require('express');
const pool = require('../db');
var router = express.Router();
var client = require('../db').pool;

router.post('/', function(req, res, next) {
    console.log(req.body);
    // manually save data for testing
    let type_name = 'Food truck testing'
    let food_name = 'Italian'
    let lat = 48.421532
    let lng = -75.697189

    pool.query(
        'INSERT INTO appdata (type_name, food_name, lat, lng) VALUES ($1, $2, $3, $4, $5, $6);',
        [type_name, food_name, lat, lng],
        (error, results) => {
            if (error) {
                console.log(error)
                throw error
            }
        }
    );

    pool.query('SELECT type_name FROM appdata;', (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        } else {
            res.status(200).json(results.rows)
        }
    });

  }
);
  
module.exports = router;
