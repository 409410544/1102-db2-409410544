const db = require('../utils/database');

const shop_44 = class shop_44 {
 
    constructor(id, name, cat_id , price, remote_url, local_url){

        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;

    }

    static async fetchAll(){

            try {
                let results = await db.query(`SELECT * from shop_44`);
                return results.rows;
            } catch (err){
                console.log('error',err);
            }
    }

    static async fetchProductByCategory(id){    
        const query = {
            text: `SELECT * from shop_44 where cat_id =$1`,
            values: [id]
        }
        try{
            let results = await db.query(query);
            return results.rows;
        }catch(err){
            console.log(err);
        }

    }


}



module.exports = shop_44;