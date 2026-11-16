const { Venta, VentasProductos } = require("../Database/relaciones");

const crearVenta = async (req, res) => {
  const { nombreCliente, precioTotal, productos } = req.body;

  const ventaCreada = await Venta.create({ nombreCliente, precioTotal });

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    await VentasProductos.create({
      VentaId: ventaCreada.id,
      ProductoId: producto.id,
      cantidad: producto.cantidad,
      precioUnitario: producto.precio,
    });
  }

  res.status(201).send(ventaCreada);
};

module.exports = { crearVenta };
