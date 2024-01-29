require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3306;

const demoUsersRoutes = require("./routes/akun-demo.js");
const realUsersRoutes = require("./routes/akun-real.js");
const beritaRoutes = require("./routes/berita.js");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname + "/../public/gambarBerita")));
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.json());

app.use("/demo-users", demoUsersRoutes);
app.use("/real-users", realUsersRoutes);
app.use("/berita", beritaRoutes);

const server = app.listen(PORT, () => {
  console.log(`server berjalan diport ${PORT}`);
});

server.keepAliveTimeout = 61 * 1000;
server.headersTimeout = 65 * 1000;

module.exports = app;
