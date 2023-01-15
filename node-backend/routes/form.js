const { request } = require('express');
var express = require('express');
var router = express.Router();
var client = require('../db').pool;

router.post('/', function(req, res, next) {
  // take in form data and insert into table
  let type_name = req.body.type_name;
  if (!type_name){
    type_name = 'NULL'
  }
  let lat = req.body.lat;
  if (!lat){
    res.sendStatus(400);
  }
  let long = req.body.long;
  if (!long){
    res.sendStatus(400);
  }
  pool.query(
    'INSERT INTO appdata (type_name, food_name, lat, lng, truck_desc, rating) VALUES ($1, $2, $3, $4, $5, $6);',
    [type_name, food_name, lat, lng, truck_desc, rating],
    (error, results) => {
        if (error) {
            console.log(error)
            throw error
        }
    }
  );
});
  
  module.exports = router;