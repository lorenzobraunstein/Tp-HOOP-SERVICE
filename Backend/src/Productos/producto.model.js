const {
  DataTypes,
  INTEGER,
  STRING,
  FLOAT,
  BOOLEAN,
  ENUM,
} = require("sequelize");
const sequelize = require("../Database/sequelize");

const Producto = sequelize.define(
  "Producto",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca: {
      type: STRING,
      allowNull: false,
    },
    modelo: {
      type: STRING,
      allowNull: false,
    },
    talle: {
      type: INTEGER,
      allowNull: false,
    },
    color: {
      type: STRING,
      allowNull: false,
    },
    jugador: {
      type: STRING,
      allowNull: false,
    },
    precio: {
      type: FLOAT,
      allowNull: false,
    },
    tipo: {
      type: ENUM("zapatillas", "camisetas"),
      allowNull: false,
    },
    imagen: {
      type: STRING,
      allowNull: true,
    },
    isActive: {
      type: BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "productos",
    timestamps: true,
  },
);

module.exports = Producto;
