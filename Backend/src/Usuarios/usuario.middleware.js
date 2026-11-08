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

module.exports = { validarDatosUsuario };
