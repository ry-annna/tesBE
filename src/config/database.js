const mysql = require("mysql2");

// const dbPool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

const dbPool = mysql.createPool({
  host: "srv169.niagahoster.com",
  user: "u3799030_express-connection",
  password: "1/3Disku",
  database: "u3799030_express",
});

module.exports = dbPool.promise();
