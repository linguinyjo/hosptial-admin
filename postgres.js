const keys = require('./config/keys')
//postgres
// const { Pool } = require('pg')
// const pgClient = new Pool({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort
// })

// pgClient.on('error', ()  => console.log("Error with postgress"))

// pgClient
//   .query('CREATE TABLE IF NOT EXISTS values (number INT')
//   .catch(err => console.log(err))
