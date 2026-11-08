const bcrypt = require("bcrypt");

const encriptarContraseña = (req, res, next) => {
  const { contraseña } = req.body;

  req.body.contraseña = bcrypt.hashSync(contraseña, 10);

  next();
};

const compararContraseña = (contraseña, contraseñaEncriptada) => {
  return bcrypt.compareSync(contraseña, contraseñaEncriptada);
};

module.exports = { encriptarContraseña, compararContraseña };
