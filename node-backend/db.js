const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

// console.log('In connectdb')

// async function connectDb(cmd) {
//     try {
//         const client = new Client({
//             user: process.env.PGUSER,
//             host: process.env.PGHOST,
//             database: process.env.PGDATABASE,
//             password: process.env.PGPASSWORD,
//             port: process.env.PGPORT
//         })
//         await client.connect();
//         const res = await client.query('SELECT * FROM appdata');
//         try {
//             if (cmd){
//                 const res2 = await client.query(cmd);
//             }
//         } catch (e) {
//             console.log(`Error with command you provided ${e}`);
//         }
//         console.log(res.rows[0]);
//         await client.end();
//     } catch (error) {
//         console.log(error)
//     }
// }

// connectDb()

// db connection
const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

module.exports = pool;