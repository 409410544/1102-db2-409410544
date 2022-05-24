var express = require('express');
var router = express.Router();

const category_44 = require('../models/category_44');
const shop_44 = require('../models/shop_44');


const crown2Controller_44 = require('../controllers/crown2Controller_44');
/* GET home page. */

//CREATE
router.post('/product_44/create',crown2Controller_44.createProducts);

//READ
router.get('/', crown2Controller_44.getCategories);
router.get('/shop_44/:category',crown2Controller_44.getProductsByCategory);

//UPDATE

router.post('/product_44/update',crown2Controller_44.updateProduct);

//DELETE
router.delete('/product_44/delete/:id',crown2Controller_44.deleteProduct);


module.exports = router;