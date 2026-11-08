const express = require("express");
const { validarDatosProducto } = require("./producto.middleware");

const {
  crearProducto,
  traerProductoPorId,
  traerProductos,
  modificarProductoPorId,
  desactivarProductoPorId,
} = require("./producto.controller");

const productoRouter = express.Router();

productoRouter.post("/", validarDatosProducto, crearProducto);

productoRouter.get("/:id", traerProductoPorId);

productoRouter.get("/", traerProductos);

productoRouter.put("/:id", validarDatosProducto, modificarProductoPorId);

productoRouter.delete("/:id", desactivarProductoPorId);

module.exports = productoRouter;
