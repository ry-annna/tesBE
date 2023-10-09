const UsersModel = require("../models/demo-akun.js");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      status: 200,
      message: "GET all users sukses",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "GET all users gagal",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  // const { body } = req;
  try {
    await UsersModel.createNewUser(req.body);
    res.status(201).json({
      status: 201,
      message: "CREATE new user sukses",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "CREATE new user gagal",
      serverMessage: error,
    });
  }
};

module.exports = { getAllUsers, createNewUser };
