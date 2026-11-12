const bcrypt = require("bcrypt");

const encriptarContraseña = (req, res, next) => {
  const { contraseña } = req.body;

  req.body.contraseña = bcrypt.hashSync(contraseña, 10);

  next();
};

const compararContraseña = (req, res, next) => {
  const { clave } = req.body;
  const { hash } = req;

  req.contraseñaValida = bcrypt.compareSync(clave, hash);

  next();
};

module.exports = { encriptarContraseña, compararContraseña };