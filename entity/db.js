const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.database,
    process.env.db_username,
    process.env.db_password,
    {
        host: process.env.db_host,
        dialect: 'postgres',
        logging: false
    }
);

module.exports = { sequelize }