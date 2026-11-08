const express = require("express");
const { validarDatosUsuario } = require("./usuario.middleware");
const { encriptarContraseña } = require("./usuario.bcrypt");

const { crearUsuario } = require("./usuario.controller");

const usuarioRouter = express.Router();

usuarioRouter.post("/", validarDatosUsuario, encriptarContraseña, crearUsuario);

module.exports = usuarioRouter;
