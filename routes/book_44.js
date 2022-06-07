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
        console.log('error',error);
    }
    
});

module.exports = router;
