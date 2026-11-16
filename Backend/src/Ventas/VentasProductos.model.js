const { INTEGER, DECIMAL } = require("sequelize");
const sequelize = require("../Database/sequelize");

// Las columnas que apuntan a la venta y al producto (VentaId y
// ProductoId) NO se declaran acá: las agrega Sequelize solo cuando
// lee los belongsToMany de relaciones.js. Si las declaráramos a mano
// terminaríamos con columnas duplicadas y el insert fallaría.

const VentaProducto = sequelize.define(
  "VentaProducto",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: {
      type: INTEGER,
      allowNull: false,
    },
    precioUnitario: {
      type: DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "ventas_productos",
    timestamps: true,
  },
);

module.exports = VentaProducto;
