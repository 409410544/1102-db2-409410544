var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_44/index', { id: '409410544',title:'Crown2' });
});

module.exports = router;
