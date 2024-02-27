const { Sequenlize, sequelize } = require('../db');
const Location = sequelize.define('location', {
    LocationID: {
        type: Sequenlize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    LocationName: {
        type: Sequenlize.STRING,
        allowNull: false,
    },
    Description: {
        type: Sequenlize.STRING,
        allowNull: false
    },
});

module.exports = { Location }