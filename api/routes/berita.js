const express = require("express");
const multer = require("multer");

const beritaController = require("../controller/berita.js");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", upload.single("gambar"), beritaController.createNewBerita);
router.get("/", beritaController.getAllBerita);
router.patch("/:idBerita", beritaController.updateUser);
router.delete("/:idBerita", beritaController.deleteUser);

module.exports = router;
