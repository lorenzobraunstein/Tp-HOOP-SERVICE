const Usuario = require("./usuario.model");

const crearUsuario = async (req, res) => {
  await Usuario.create(req.body);

  res.status(201).send({ mensaje: "Usuario creado exitosamente" });
};

const validarLogin = (req, res) => {
  if (req.contraseñaValida) {
    res.redirect("/productos/dashboard");
  } else {
    res.redirect("/usuarios/login");
  }
};

module.exports = { crearUsuario, validarLogin };
