var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // if logged in serve res.reder logged in
    // else redirect to index.html
    req.session.destroy();
    res.redirect('/')

});

module.exports = router;