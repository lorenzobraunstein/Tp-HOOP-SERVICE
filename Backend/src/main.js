const express = require("express");

const sequelize = require("./Database/sequelize");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use("/imagenes", express.static("img"));
app.use("/public", express.static("public"));

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    allowedHeaders: "content-type",
  }),
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El server inició correctamente en el puerto ${PORT}`);
});
