const Producto = require("../Productos/producto.model");
const Venta = require("../Ventas/venta.model");
const VentasProductos = require("../Ventas/VentasProductos.model");
const sequelize = require("./sequelize");

Producto.belongsToMany(Venta, {
  through: VentasProductos,
  foreignKey: "ProductoId",
  otherKey: "VentaId",
});

Venta.belongsToMany(Producto, {
  through: VentasProductos,
  foreignKey: "VentaId",
  otherKey: "ProductoId",
});

async function syncMuchos() {
  await sequelize.sync({ alter: true });
}

syncMuchos();

module.exports = {
  Producto,
  Venta,
  VentasProductos,
};
