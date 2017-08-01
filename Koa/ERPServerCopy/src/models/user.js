const Sequelize = require("sequelize");

const sequelize = require("../db");

const User = sequelize.define("users", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

module.exports = User;
