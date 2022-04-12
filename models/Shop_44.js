const db = require('../utils/database');

const Shop_44 = class Shop_44 {
 
    constructor(id, name, cat_id , price, remote_url, local_url){

        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.price = price;

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

const test = async () => {
    let result = await Shop_44.fetchProductByCategory(1);
    console.log('test results', JSON.stringify(result));
}

test();

module.exports = Shop_44;