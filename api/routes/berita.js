const express = require("express");

const beritaController = require("../controller/berita.js");

const router = express.Router();

router.post("/", beritaController.createNewBerita);
router.get("/", beritaController.getAllBerita);
router.patch("/:idBerita", beritaController.updateUser);
router.delete("/:idBerita", beritaController.deleteUser);

module.exports = router;
