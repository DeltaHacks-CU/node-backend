const { request } = require('express');
var express = require('express');
var router = express.Router();
const pool = require('../db');

router.post('/', function(req, res, next) {
  // take in form data and insert into table

  try {
    console.log('In file request')
    console.log(req.files);

    const { image } = req.files;

    // If no image submitted, exit
    if (!image) res.setHeader("Status", 400);
    else {
      if (/^image/.test(image.mimetype)) res.setHeader("Status", 400);
      else {
        // Move the uploaded image to our upload folder
        image.mv('../' + '/upload/' + image.name);

        // All good
        res.setHeader(200);
        console.log('Image saved!')
      }
    }  
  } catch (e) {
    console.log(`Error dealing with the image ${e}`);
  }
});
  
module.exports = router;