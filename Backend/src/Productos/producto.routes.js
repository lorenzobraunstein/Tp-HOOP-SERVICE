const express = require("express");
const upload = require("./producto.multer");
const { validarDatosProducto } = require("./producto.middleware");

const {
  crearProducto,
  traerProductoPorId,
  traerProductos,
  modificarProductoPorId,
  desactivarProductoPorId,
} = require("./producto.controller");

const productoRouter = express.Router();

productoRouter.post(
  "/",
  upload.single("imagen"),
  validarDatosProducto,
  crearProducto,
);

productoRouter.get("/:id", traerProductoPorId);

productoRouter.get("/", traerProductos);

productoRouter.put(
  "/:id",
  upload.single("imagen"),
  validarDatosProducto,
  modificarProductoPorId,
);

productoRouter.delete("/:id", desactivarProductoPorId);

module.exports = productoRouter;
