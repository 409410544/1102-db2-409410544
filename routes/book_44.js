var express = require('express');
var router = express.Router();

const db = require('../utils/database');


/* GET home page. */
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
module.exports = router;
