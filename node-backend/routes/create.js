var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

// var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.post('/', urlencodedParser, function(req, res, next) {
    console.log(req.body);
    console.log(req.body.name);
    text = 'Testing';
    bodyname = req.body.name;
    res.send({
        text,
        bodyname,
      });
  });
  
module.exports = router;
