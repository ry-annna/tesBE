const dbPool = require("../config/database.js");
const fs = require("fs");

const getAllBerita = () => {
  const SQLQuery = "SELECT * FROM `berita` ORDER BY tanggal DESC";

  return dbPool.execute(SQLQuery);
};

const createNewBerita = (req) => {
  const SQLQuery = `INSERT INTO \`berita\` (gambar, title, deskripsi,sumber) VALUES ('${req.file.filename}', '${req.body.title}', '${req.body.deskripsi}','${req.body.sumber}')`;

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllBerita, createNewBerita };
