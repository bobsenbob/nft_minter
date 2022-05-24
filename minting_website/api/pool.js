const Pool = require('pg').Pool
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    ssl: { rejectUnauthorized: false }
});

pool.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as threadthreadId id:');
});

module.exports = pool;