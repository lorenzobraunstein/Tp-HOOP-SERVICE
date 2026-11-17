const express = require("express");
const { validarDatosVenta } = require("./venta.middleware");
const { crearVenta, traerVentas } = require("./venta.controller");

const ventaRouter = express.Router();

ventaRouter.post("/",validarDatosVenta, crearVenta);

ventaRouter.get("/", traerVentas);

module.exports = ventaRouter;
