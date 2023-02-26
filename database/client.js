const { Client } = require("pg");

const db = new Client({
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PG_PORT,
  database: process.env.DATABASE,
});

// Inicialización de la base de datos
db.connect()
  .then(() =>
    db.query(
    `CREATE TABLE IF NOT EXISTS tuners (
        id SERIAL PRIMARY KEY,
        name TEXT,
        artist TEXT,
        album TEXT,
        time TEXT,
        is_favorite BOOLEAN
        );`
    )
  )
  .then(() => console.log("All right"))
  .catch((err) => console.log(err));

module.exports = db;
