var express = require('express');
var router = express.Router();

const db = require('../utils/database');


/* READ */
router.get('/',  async (req, res) => {
 
 
    try{
        const results = await db.query('SELECT * FROM shop_44 ORDER BY id ASC ');
       // console.log('results',JSON.stringify(results.rows));
        res.render('shop_44/index', { 
            data: results.rows,
            id: '409410544',
            name:'Angelo Lee' 
        });
    }catch(error){
        res.render('shop_44/index', { 
            data: '',
            id: '409410544',
            name:'Angelo Lee' 
        });
    }
    
});

router.get('/create',   (req, res) => {
 
    res.render('shop_44/add_44', 
    { 
        id: '409410544',
        name:'Angelo Lee' 
    });
    
});

router.get('/edit/:id',async(req,res) =>{
    const id = req.params.id;
    console.log('id',id);
    try{
        const query = {
            text:`SELECT * FROM shop_44 WHERE id = $1;`,
            values:[id]
        }
        const results = await db.query(query);
        data = results.rows;
        res.render('shop_44/edit_44',{
            id:data[0].id,
            name:data[0].name,
            cat_id:data[0].cat_id,
            price:data[0].price,
            remote_url:data[0].remote_url,
            local_url:data[0].local_url


        });
    }catch(err){
        console.log(err);
    }

});

//CREATE

router.post('/create', async(req, res) => {

 console.log('body',req.body);
    const id = req.body.id;
    const name = req.body.name;
    const cat_id = req.body.cat_id;
    const price = req.body.price;
    const remote_url = req.body.remote_url;
    const local_url = req.body.local_url;



    try{
        const query = {
            text: `INSERT INTO shop_44(id, name ,cat_id , price,remote_url,local_url) VALUES ($1, $2, $3, $4,$5,$6)`,
            values:[id,name,cat_id,price,remote_url,local_url],
        };
        await db.query(query);
        res.redirect('/shop_44');
    }catch(error){
        console.log(error);
    }
});

//UPDATE

router.post('/update',async(req,res)=>{
try{
    const query = {
        text:`UPDATE shop_44 SET name = $1,cat_id = $2, price = $3,remote_url =$4,local_url=$5  WHERE id = $6;`,
        values:[req.body.name,req.body.cat_id,req.body.price,req.body.remote_url,req.body.local_url,req.body.id],
    };
    await db.query(query);
    res.redirect('/shop_44');
}catch(err){
    console.log(err);
}



})

//DELETE

router.get('/delete/:id',async(req,res)=> {
    try{
        console.log('delete id',req.params.id);
        const query = {
            text:`DELETE FROM shop_44 WHERE id = $1;`,
            values: [req.params.id]
        }
    await db.query(query);
    res.redirect('/shop_44');
    }catch(err){
        console.log(err);
    }

});








module.exports = router;
