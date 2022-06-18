const { Client } = require('pg');

/*
SELECT *
FROM pg_settings
WHERE name = 'port';
*/
const db = new Client({
  host: 'localhost',
  port: 5432,
  user: 'kb-rithm',
  database: 'users_test'
})



db.connect()
.then(()=>console.log("Connected to db"))
.catch(err=>console.log("Error",err))

module.exports =db;



