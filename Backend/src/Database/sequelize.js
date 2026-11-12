const { Sequelize } = require("sequelize");


//"mysql://root:root@localhost:3306/HOOP-SERVICE",
const sequelize = new Sequelize(
  "mysql://root:Zxc123456789!!!@localhost:3306/HOOP-SERVICE",
);

module.exports = sequelize;
