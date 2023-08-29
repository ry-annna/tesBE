const UsersModel = require("../models/demo-akun.js");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: "GET all users sukses",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "GET all users sukses",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new user sukses",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "CREATE new user gagal",
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

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
