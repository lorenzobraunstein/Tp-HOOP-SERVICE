const express = require("express");
const multer = require("multer");

const {
  validarDatosUsuario,
  validarUsuarioExiste,
} = require("./usuario.middleware");
const { encriptarContraseña, compararContraseña } = require("./usuario.bcrypt");

const { crearUsuario, validarLogin } = require("./usuario.controller");

const usuarioRouter = express.Router();

usuarioRouter.get("/login", (req, res) => {
  res.render("login");
});

usuarioRouter.post("/", validarDatosUsuario, encriptarContraseña, crearUsuario);

usuarioRouter.post("/login", multer().none(), validarUsuarioExiste, compararContraseña, validarLogin, );

module.exports = usuarioRouter;
