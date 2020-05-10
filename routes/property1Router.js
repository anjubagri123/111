var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('property1', { title: 'property1' });
});

module.exports = router;
