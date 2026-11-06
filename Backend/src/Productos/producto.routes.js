const express = require("express");

const {
  crearProducto,
  modificarProductoPorId,
} = require("./producto.controller");

const productoRouter = express.Router();

productoRouter.post("/", crearProducto);

productoRouter.put("/id", modificarProductoPorId);

module.exports = productoRouter;
