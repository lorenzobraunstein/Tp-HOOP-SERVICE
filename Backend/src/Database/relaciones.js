const Producto = require("../Productos/producto.model");
const Venta = require("../Ventas/venta.model");
const VentasProductos = require("../Ventas/VentasProductos.model");

// MUCHO A MUCHOS

Producto.belongsToMany(Venta, { through: VentasProductos });
Venta.belongsToMany(Producto, { through: VentasProductos });

module.exports = {
  Producto,
  Venta,
  VentasProductos,
};
