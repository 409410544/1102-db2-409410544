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

    //create

    static async create(body){
        const {id , name, cat_id, price, remote_url, local_url} = body;

        const  query = {
                text:`INSERT INTO shop_44 (id , name , cat_id , price , remote_url , local_url) VALUES($1,$2,$3,$4,$5,$6)`,
                values : [id , name, cat_id, price, remote_url, local_url]
        }
        return db.query(query);
    }

    //READ
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

    //UPDATE

    static async update(body){
        console.log('create body',body);
        const {id , name, cat_id, price, remote_url, local_url} = body;
        const query = {
            text:`UPDATE shop_44 SET name = $1, cat_id = $2, price = $3,  remote_url = $4 ,  local_url = $5 WHERE id = $6`,
            values:[name, cat_id , price , remote_url , local_url , id],
        };
        return db.query(query);
    }

    //DELETE

    static async deleteById(id){
        const query = {
            text:`DELETE FROM shop_44 WHERE id = $1`,
            values:[id],
        };
        return db.query(query);
    }

};



module.exports = shop_44;