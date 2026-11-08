function validarDatosProducto(req, res, next) {
  const { marca, modelo, talle, color, jugador, precio } = req.body;

  if (
    typeof marca === "string" &&
    marca.trim().length >= 2 &&
    typeof modelo === "string" &&
    modelo.trim().length >= 2 &&
    talle > 0 &&
    typeof color === "string" &&
    color.trim().length >= 2 &&
    typeof jugador === "string" &&
    jugador.trim().length >= 2 &&
    precio > 0
  ) {
    next();
  } else {
    res.status(400).send({ mensaje: "Los datos ingreados no son validos" });
  }
}

module.exports = { validarDatosProducto };
