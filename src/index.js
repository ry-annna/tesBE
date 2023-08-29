require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3000;

const usersRoutes = require("./routes/akun-demo.js");
const beritaRoutes = require("./routes/berita.js");

const app = express();

app.use(express.json());

// app.use("/", (req, res) => {
//   res.status(200).send("hello");
// });
app.use("/users", usersRoutes);
app.use("/berita", beritaRoutes);

app.listen(PORT, () => {
  console.log(`server berjalan diport ${PORT}`);
});
