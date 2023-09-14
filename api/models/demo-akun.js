const dbPool = require("../config/database.js");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM `demo-akun`";

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  // const table = `demo-akun`;
  const SQLQuery = `INSERT INTO \`demo-akun\` (nama, email, telp) VALUES ('${body.nama}', '${body.email}', '${body.telp}')`;

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllUsers, createNewUser };
