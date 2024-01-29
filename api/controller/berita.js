const UsersModel = require("../models/berita.js");
const fs = require("fs");

const getAllBerita = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllBerita();

    res.json({
      status: 200,
      message: "GET all berita sukses",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: [...data],
    });
  } catch (error) {
    res.status(500).json({
      message: "GET all berita gagal",
      serverMessage: error,
    });
  }
};

const createNewBerita = async (req, res) => {
  try {
    await UsersModel.createNewBerita(req.body);
    res.status(201).json({
      status: 201,
      message: "CREATE new berita sukses",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "CREATE new berita gagal",
      serverMessage: error,
    });
  }
};

module.exports = { getAllBerita, createNewBerita };
