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
                let results = await db.query(`SELECT * from category_xx`);
                return results.rows;
            } catch (err){
                console.log('error',err);
            }
    }

}

const test = async() => {

    let results = await Category_44.fetchAll();
    console.log('result',JSON.stringify(results.rows));
}

test();

module.exports = Category_44;