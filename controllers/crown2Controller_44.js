const res = require('express/lib/response');
const category_44 = require('../models/Category_44');
const shop_44 = require('../models/Shop_44');


//CREATE
exports.createProducts = async(req, res)=>{
console.log('body',req.body);
try{

  let results = await shop_44.create(req.body);
  console.log('results',JSON.stringify(results));
  res.json({ 
    msg: 'create -- body data received',
    data: results,
  
  });
}catch(err){
    console.log('err',err);
}

};

//READ

exports.getCategories = async (req,res) => {

    try {
        let results = await category_44.fetchAll();
        console.log('result',JSON.stringify(results));
        res.render('crown2_44/index', {
  
          data: results,
          id:'409410544',
          title:'李鴻君'
        });
    }catch(err){
      console.log(err);
    }
};

exports.getProductsByCategory = async (req,res) => {
        
    console.log('category',req.params.category);
      
        try{
          const cid = await category_44.fetchCatIdByName(req.params.category);
          let results = await shop_44.fetchProductByCategory(cid);
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
      };


//UPDATE 
exports.updateProduct = async(req,res) => {

  console.log('body',req.body);
  try{
    let results = await shop_44.update(req.body);
    res.json({
      msg:'Update successful',
      data: results,
    })

  }catch(err){
    console.log('err',err)
  }


}


//DELETE

exports.deleteProduct = async (req, res) => {

    console.log('delete id',req.params.id);

    try{
      const results = await shop_44.deleteById(req.params.id);
      res.json({
        msg:'Deletion Successful',
        data: results,
      });
    }catch(err){
      console.log(err);
    }

}






