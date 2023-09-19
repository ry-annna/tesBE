const UsersModel = require("../models/berita.js");
const fs = require("fs");

const getAllBerita = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllBerita();
    // const imageData = imageDataRaw.gambar;
    const jsonData = JSON.stringify(data);

    const imageBuffer = Buffer.from(data[0].gambar, "base64");
    const titleDecode = atob(data[0].title);
    const deskripsiDecode = atob(data[0].deskripsi);
    const sumberDecode = atob(data[0].sumber);
    // fs.writeFileSync("tes.jpg", imageBuffer);

    res.json({
      status: 200,
      message: "GET all berita sukses",
      // data: [
      //   {
      //     title: titleDecode,
      //     deskripsi: deskripsiDecode,
      //     sumber: sumberDecode,
      //     gambar: imageBuffer,
      //   },
      // ],
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "GET all berita gagal",
      serverMessage: error,
    });
  }
};

const createNewBerita = async (req, res) => {
  const { body } = req;
  try {
    // await UsersModel.createNewBerita(body);
    res.status(201).json({
      status: 201,
      message: "CREATE new berita sukses",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "CREATE new berita gagal",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, idUser);
    res.status(200).json({
      message: "UPDATE user sukses",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.json({
      message: "UPDATE user gagal",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.json({
      message: "DELETE user sukses",
    });
  } catch (error) {
    res.json({
      message: "DELETE user gagal",
      serverMessage: error,
    });
  }
};

module.exports = { getAllBerita, createNewBerita, updateUser, deleteUser };
