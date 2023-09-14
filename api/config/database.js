const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const dbPoolLocal = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "express",
});

module.exports = dbPool.promise();
module.exports = dbPoolLocal.promise();
