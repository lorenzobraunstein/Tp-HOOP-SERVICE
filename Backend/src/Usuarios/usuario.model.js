//DTO (data transfer object), no hay logica.

const { INTEGER, STRING } = require("sequelize");
const sequelize = require("../Database/sequelize");

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    contraseña: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    tableName: "usuario",
    timestamps: true,
  },
);

Usuario.sync({ alter: true });

module.exports = Usuario;
