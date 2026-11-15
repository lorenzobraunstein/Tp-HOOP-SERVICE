const Usuario = require("./usuario.model");

const crearUsuario = async (req, res) => {
  await Usuario.create(req.body);

  res.status(201).send({ mensaje: "Usuario creado exitosamente" });
};

const validarLogin = (req, res) => {
  if (req.contraseñaValida) {
    res.status(200).send({
      mensaje: "Inicio de sesión exitoso",
    });
  } else {
    res.status(401).send({
      mensaje: "Las credenciales no son correctas",
    });
  }
};

module.exports = { crearUsuario, validarLogin };
