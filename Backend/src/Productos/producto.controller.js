const Producto = require("./producto.model");

const crearProducto = async (req, res) => {
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

  await Producto.update(req.body, {
    where: { id },
  });

  res.status(200).send({ mensaje: "Producto actualizado exitosamente" });
};

const desactivarProductoPorId = async (req, res) => {
  const { id } = req.params;

  await Producto.update(
    { activo: false },
    {
      where: { id: id },
    },
  );

  res.status(200).send({ mensaje: "Baja de producto realizada exitosamente" });
};

module.exports = {
  crearProducto,
  traerProductoPorId,
  traerProductos,
  modificarProductoPorId,
  desactivarProductoPorId,
};
