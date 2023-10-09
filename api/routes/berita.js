const express = require("express");
const multer = require("multer");

const beritaController = require("../controller/berita.js");

const router = express.Router();
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/gambarBerita");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
router.post("/", upload.single("gambar"), beritaController.createNewBerita);
router.get("/", beritaController.getAllBerita);
router.patch("/:idBerita", beritaController.updateUser);
router.delete("/:idBerita", beritaController.deleteUser);

module.exports = router;
