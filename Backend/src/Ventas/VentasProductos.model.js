const { INTEGER, DECIMAL } = require("sequelize");
const sequelize = require("../Database/sequelize");

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
