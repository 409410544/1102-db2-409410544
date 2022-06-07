var express = require('express');
var router = express.Router();

const db = require('../utils/database');


/* READ */
router.get('/',  async (req, res) => {
 
 
    try{
        const results = await db.query('SELECT * FROM book_44');
        console.log('results',JSON.stringify(results.rows));
        res.render('book_44/index', { 
            data: results.rows,
            id: '409410544',
            name:'Angelo Lee' 
        });
    }catch(error){
        res.render('book_44/index', { 
            data: '',
            id: '409410544',
            name:'Angelo Lee' 
        });
    }
    
});

router.get('/create',   (req, res) => {
 
    res.render('book_44/add_44', 
    { 
        id: '409410544',
        name:'Angelo Lee' 
    });
    
});


//CREATE

router.post('/create', async(req, res) => {

    console.log('body',req.body);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;


    try{
        const query = {
            text: `INSERT INTO book_44(id, name ,author , price) VALUES ($1, $2, $3, $4)`,
            values:[id,name,author,price],
        };
        await db.query(query);
        res.redirect('/book_44');
    }catch(error){
        console.log(error);
    }
});








module.exports = router;
