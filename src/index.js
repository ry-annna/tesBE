require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT;

const usersRoutes = require("./routes/akun-demo.js");
const beritaRoutes = require("./routes/berita.js");

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/berita", beritaRoutes);

app.listen(4000, () => {
  console.log(`server berjalan diport ${PORT}`);
});
