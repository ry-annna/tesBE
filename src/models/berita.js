const dbPool = require("../config/database.js");
const fs = require("fs");

const getAllBerita = () => {
  const SQLQuery = "SELECT * FROM `berita` WHERE id = 14";

  return dbPool.execute(SQLQuery);
};

const createNewBerita = (body) => {
  const image = fs.readFileSync(
    "C:/Users/ryans/OneDrive/Desktop/vplus/src/assets/images/miniaccount.jpg"
  );

  const tes =
    "C:/Users/ryans/OneDrive/Desktop/vplus/src/assets/images/miniaccount.jpg";

  // Convert the image to base64s
  // const base64Image = body.gambar.toString("base64");
  console.log(body.title);

  const base64Image = image.toString("base64");
  const base64Title = btoa(body.title);
  const base64Deskripsi = btoa(body.deskripsi);
  const base64Sumber = btoa(body.sumber);
  // const table = `demo-akun`;
  const SQLQuery = `INSERT INTO \`berita\` (gambar, title, deskripsi,sumber) VALUES ('${base64Image}', '${base64Title}', '${base64Deskripsi}','${base64Sumber}')`;

  return dbPool.execute(SQLQuery);
};

const updateUser = (body, id) => {
  // const table = `demo-akun`;
  const SQLQuery = `UPDATE \`berita\` SET nama = '${body.nama}', email = '${body.email}', telp = '${body.telp}' WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM \`berita\` WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllBerita, createNewBerita, updateUser, deleteUser };
