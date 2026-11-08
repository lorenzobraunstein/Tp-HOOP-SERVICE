const { Op } = require("sequelize");
const Producto = require("./producto.model");

const crearProducto = async (req, res) => {
  req.body.imagen = req.file
    ? `http://localhost:3000/imagenes/${req.file.filename}`
    : null;

  const productoCreado = await Producto.create(req.body);

  res.status(201).send(productoCreado);
};

const traerProductoPorId = async (req, res) => {
  const id = req.params.id;

  const producto = await Producto.findByPk(id);

  if (!producto) {
    return res.status(404).send({
      mensaje: "No existe un producto con este ID",
    });
  }

  res.send(producto);
};

const traerProductos = async (req, res) => {
  const productos = await Producto.findAll({ order: [["id", "ASC"]] });

  res.send(productos);
};

const modificarProductoPorId = async (req, res) => {
  const { id } = req.params;

  if (req.file) {
    req.body.imagen = `http://localhost:3000/imagenes/${req.file.filename}`;
  }

  const productoModificado = await Producto.update(req.body, {
    where: { id },
  });

  res.send(productoModificado);
};

const desactivarProductoPorId = async (req, res) => {
  const { id } = req.params;

  const productoDesactivado = await Producto.update(
    { activo: false },
    {
      where: { id: id },
    },
  );

  res.send(productoDesactivado);
};

module.exports = {
  crearProducto,
  traerProductoPorId,
  traerProductos,
  modificarProductoPorId,
  desactivarProductoPorId,
};
