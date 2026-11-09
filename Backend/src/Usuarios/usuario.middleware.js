const Usuario = require("./usuario.model");

function validarDatosUsuario(req, res, next) {
  const { email, contraseña } = req.body;

  if (
    typeof email === "string" &&
    email.trim().length >= 5 &&
    typeof contraseña === "string" &&
    contraseña.trim().length >= 6
  ) {
    next();
  } else {
    res.status(400).send({ mensaje: "Los datos ingreados no son validos" });
  }
}

const validarUsuarioExiste = async (req, res, next) => {
  const { email } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });

  if (usuario) {
    req.hash = usuario.contraseña;
    next();
  } else {
    res.status(400).send({ mensaje: "Las credenciales no son correctas" });
  }
};

module.exports = { validarDatosUsuario, validarUsuarioExiste };
