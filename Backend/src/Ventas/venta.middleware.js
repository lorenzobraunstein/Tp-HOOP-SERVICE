function validarDatosVenta(req, res, next) {
  const { nombreCliente, precioTotal, productos } = req.body;

  if (
    typeof nombreCliente === "string" &&
    nombreCliente.trim().length >= 1 &&
    precioTotal > 0 &&
    Array.isArray(productos) &&
    productos.length > 0
  ) {
    next();
  } else {
    res.status(400).send({ mensaje: "Los datos ingresados no son validos" });
  }
}

module.exports = { validarDatosVenta };