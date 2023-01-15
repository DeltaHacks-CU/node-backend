const { request } = require('express');
var express = require('express');
var router = express.Router();
const pool = require('../db');


router.post('/', function(req, res, next) {
  // take in form data and insert into table

  try {
    // console.log(req.body)
    let type_name = req.body.type_name;
    if (!type_name){
      type_name = 'NULL'
    }
    let food_name = req.body.food_name;
    if (!food_name){
      food_name = 'NULL'
    }
    let lat = req.body.lat;
    if (!lat){
      res.sendStatus(400);
      throw error
    }
    let lng = req.body.lng;
    if (!lng){
      res.sendStatus(400);
      throw error
    }
    let truck_desc = req.body.truck_desc;
    if (!truck_desc){
      truck_desc = 'NULL'
    }
    let rating = req.body.rating;
    if (!rating){
      rating = 'NULL'
    }
    pool.query(
      'INSERT INTO appdata (type_name, food_name, lat, lng, truck_desc, rating) VALUES ($1, $2, $3, $4, $5, $6);',
      [type_name, food_name, lat, lng, truck_desc, rating],
      (error, results) => {
          if (error) {
              console.log(error)
              throw error
          } else {
            res.setHeader("Status", 400);
            res.redirect('/loggedin');
          }
      }
    );
  } catch (error) {
    console.log(`Error Form invalid : ${error}`);
    res.setHeader("Status", 404);
    res.redirect('/loggedin');
  }
});
  
  module.exports = router;