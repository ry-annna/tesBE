const express = require("express");
const multer = require("multer");

const beritaController = require("../controller/berita.js");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/gambarBerita");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("gambar"), beritaController.createNewBerita);
router.get("/", beritaController.getAllBerita);

module.exports = router;
