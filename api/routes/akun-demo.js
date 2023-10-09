const express = require("express");
const app = express();

const userController = require("../controller/akun-demo.js");

const router = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
router.post("/", userController.createNewUser);
router.get("/", userController.getAllUsers);

module.exports = router;
