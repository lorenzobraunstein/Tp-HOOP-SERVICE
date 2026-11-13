const express = require("express");
const { crearVenta } = require("./venta.controller");

const ventaRouter = express.Router();

ventaRouter.post("/", crearVenta);

module.exports = ventaRouter;
