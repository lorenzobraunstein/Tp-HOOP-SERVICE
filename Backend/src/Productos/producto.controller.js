const { Op } = require("sequelize");

const crearProducto = async (req, res) => {
  const { marca, modelo, talle, color, jugador, precio } = req.body;

  const productoCreado = await Producto.create({
    marca: marca,
    modelo: modelo,
    talle: talle,
    color: color,
    jugador: jugador,
    precio: precio,
  });

  res.send(productoCreado);
};

const modificarProductoPorId = async (req, res) => {};

module.exports = {
  crearProducto,
  modificarProductoPorId,
};
