var express = require('express');
const Category_44 = require('../models/Category_44');
const Shop_44 = require('../models/Shop_44');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
     /* let results = await Category_44.fetchAll();*/
      console.log('result',JSON.stringify(results));
      res.render('crown2_44/index', {

        data: results,
        id:'409410544',
        title:'crown2'
      });
  }catch(err){
    console.log(err);
  }


});
 
router.get('/shop_44/:category',async function(req, res){
  console.log('category',req.params.category);

  try{
    const cid = await Category_44.fetchCatIdByName(req.params.category);
    console.log('cid',cid);
    let results = await Shop_44.fetchProductByCategory(cid);
    console.log('results',JSON.stringify(results));

    res.render('crown2_44/products_44',{
      data: results,
      title: req.params.category,
      name: '李鴻君',
      id: '409410544'
    });

  }catch(err){
    console.log(err);
  }

});
module.exports = router;
