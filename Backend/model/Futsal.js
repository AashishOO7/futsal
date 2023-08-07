const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connection');

const Futsal = sequelize.define('futsal', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull:true
  },
});

module.exports = Futsal;
