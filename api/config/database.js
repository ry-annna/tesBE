// const mysql = require("mysql");
const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "srv169.niagahoster.com",
  user: "u3799030_express-connection",
  password: "1/3Disku",
  database: "u3799030_express",
});

module.exports = dbPool.promise();
