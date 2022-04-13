const db = require('../utils/database');

const Category_44 = class Category_44 {
 
    constructor(id, name, size, remote_url, local_url, link_url ){

        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;

    }

    static async fetchAll(){

            try {
                let results = await db.query(`SELECT * from category_44`);
                return results.rows;
            } catch (err){
                console.log('error',err);
            }
    }
    static async fetchCatIdByName(name){
        try{
            let results = await db.query(`SELECT * from category_44 where name = $1`, [name])
            return results.rows[0].id;
        }catch(err){
            console.log('error',err);
        }

    }
}

module.exports = Category_44;