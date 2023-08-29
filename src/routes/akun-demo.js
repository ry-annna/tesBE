const express = require("express");

const userController = require("../controller/akun-demo.js");

const router = express.Router();

router.post("/", userController.createNewUser);
router.get("/", userController.getAllUsers);
router.patch("/:idUser", userController.updateUser);
router.delete("/:idUser", userController.deleteUser);

module.exports = router;
