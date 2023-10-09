require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const demoUsersRoutes = require("./routes/akun-demo.js");
const realUsersRoutes = require("./routes/akun-real.js");
const beritaRoutes = require("./routes/berita.js");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use(express.json());

app.use("/demo-users", demoUsersRoutes);
app.use("/real-users", realUsersRoutes);
app.use("/berita", beritaRoutes);

app.listen(PORT, () => {
  console.log(`server berjalan diport ${PORT}`);
});

module.exports = app;
