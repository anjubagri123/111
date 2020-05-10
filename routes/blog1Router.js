var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog1', { title: 'blog1' });
});

module.exports = router;