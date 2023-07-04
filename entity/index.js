const { loadInitialData } = require("../service/book");
const { sequelize } = require("./db");


const initializeDB = async () => {
    try {
        console.log('Initializing the database');
        await sequelize.authenticate();
        await sequelize.sync({ force: true }) // Use { force: true } to drop tables before recreating them
            .then(async () => {
                await loadInitialData();
                console.log('Models synchronized with the database');
            })
            .catch(err => {
                console.error('Error synchronizing models:', err);
            });
        return new Promise((resolve, reject) => {
            resolve(true)
        });
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        });
    }
}

module.exports = { initializeDB };