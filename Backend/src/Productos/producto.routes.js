const express = require("express");
const { upload, validarImagen } = require("./producto.multer");
const { validarDatosProducto } = require("./producto.middleware");

const {
  crearProducto,
  traerProductoPorId,
  traerProductos,
  traerDashboard,
  modificarProductoPorId,
  desactivarProductoPorId,
  activarProductoPorId,
} = require("./producto.controller");

const productoRouter = express.Router();

productoRouter.post(
  "/",
  upload.single("imagen"),
  validarDatosProducto,
  validarImagen,
  crearProducto,
);

productoRouter.get("/dashboard", traerDashboard);

productoRouter.get("/:id", traerProductoPorId);

productoRouter.get("/", traerProductos);

productoRouter.put(
  "/:id",
  upload.single("imagen"),
  validarDatosProducto,
  validarImagen,
  modificarProductoPorId,
);

productoRouter.patch("/desactivar/:id", desactivarProductoPorId);

productoRouter.patch("/activar/:id", activarProductoPorId);

module.exports = productoRouter;
