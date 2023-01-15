var express = require('express');
var router = express.Router();
var client = require('../db').pool;

router.post('/', function(req, res, next) {
    // take in form data and insert into table
});
  
  module.exports = router;