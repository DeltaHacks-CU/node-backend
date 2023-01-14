var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    let allcoordinates = [req.body.lat, req.body.lng];
    console.log(allcoordinates);
    res.send({
        allcoordinates,
      });
  }
);
  
module.exports = router;
