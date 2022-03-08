var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_44/index', { id: '409410544',name:'Angelo Lee' });
});

module.exports = router;
