var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

// var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.post('/', urlencodedParser, function(req, res, next) {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.lat);
    text = 'Testing';
    let lat = '';
    lat = req.body.lat;
    let lng = '';
    lng = req.body.lng;
    bodyname = [lat, lng];
    console.log(bodyname);
    res.send({
        text
      });
  }
);
  
module.exports = router;
