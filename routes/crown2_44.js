var express = require('express');
var router = express.Router();

const category_44 = require('../models/category_44');
const shop_44 = require('../models/shop_44');


const crown2Controller_44 = require('../controllers/crown2Controller_44');
/* GET home page. */

router.get('/', crown2Controller_44.getCategories);
router.get('/shop_44/:category',crown2Controller_44.getProductsByCategory);

module.exports = router;