const {Pool} = require('pg');
const dotenv = require('dotenv');
dotenv.config()
const pool = new Pool({
    host : process.env.DB_HOST,
    database: process.env.DB_NAME, 
    user: process.env.DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT 
});
module.exports = pool;