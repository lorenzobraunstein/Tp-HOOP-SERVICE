const { Op } = require("sequelize");
const Usuario = require("./usuario.model");

const crearUsuario = async (req, res) => {
  const usuarioCreado = await Usuario.create(req.body);

  res.status(201).send({ mensaje: "Usuario creado exitosamente" });
};

module.exports = { crearUsuario };
