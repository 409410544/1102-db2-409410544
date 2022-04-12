 const { Pool } = require('pg');
const { connectionString, ssl } = require('pg/lib/defaults');

 const isProduction = process.env.NODE_ENV === 'production';

 let pool;

 if(isProduction) {

    pool = new Pool(
        {
            connectionString:process.env.DATABASE_URL,
            ssl:{ rejectUnauthorized: false}
        }
    )
 }else {

    pool = new Pool({

            user: 'postgres',
            host: 'localhost',
            port: '5432',
            database: 'crown_44',
            password:'0000'

    } );
 }

 module.exports = pool;

 /* postgres://huiemqewrbvobf:aade7446fa3ce0166385224d5a24997173b26353bee2813fe486c770d568f7f5@ec2-54-209-221-231.compute-1.amazonaws.com:5432/db82e8ae72hbfv 
    host: ec2-54-209-221-231.compute-1.amazonaws.com:5432/db82e8ae72hbfv
    user: huiemqewrbvobf
    port: 5432
    database: db82e8ae72hbfv
    pw: aade7446fa3ce0166385224d5a24997173b26353bee2813fe486c770d568f7f5
 
 
 
 */ 
