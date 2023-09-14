const express = require("express");

const userController = require("../controller/akun-real.js");

const router = express.Router();

router.post("/", userController.createNewUser);
router.get("/", userController.getAllUsers);

module.exports = router;
