const { INTEGER, STRING, DECIMAL } = require("sequelize");
const sequelize = require("../Database/sequelize");

const Venta = sequelize.define(
  "Venta",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreCliente: {
      type: STRING,
      allowNull: false,
    },
    precioTotal: {
      type: DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "venta",
    timestamps: true,
  },
);

Venta.sync({ alter: true });

module.exports = Venta;
