const User = require("./user-model");
const Agent = require('./agent-model');
const Futsal = require('./Futsal');
const sequelize = require("../config/db-connection");

const connectToDatabase = async () => {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
}

module.exports = { User, Agent,Futsal, connectToDatabase }; 