const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "u3799030_express",
});

module.exports = dbPool.promise();
