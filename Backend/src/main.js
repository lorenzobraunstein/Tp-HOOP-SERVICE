const express = require("express");
const path = require("node:path");
const productoRouter = require("./Productos/producto.routes");
const usuarioRouter = require("./Usuarios/usuario.routes");
const ventaRouter = require("./Ventas/venta.routes");

const sequelize = require("./Database/sequelize");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use("/imagenes", express.static(path.join(__dirname, "/public/img")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Templates"));

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    allowedHeaders: "content-type",
  }),
);

app.use("/productos", productoRouter);
app.use("/usuarios", usuarioRouter);
app.use("/ventas", ventaRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El server inició correctamente en el puerto ${PORT}`);
});
