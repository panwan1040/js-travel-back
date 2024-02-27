const { Sequenlize, sequelize } = require('../db');
const Photographer = sequelize.define('photographer', {
    PhotographerID: {
        type: Sequenlize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequenlize.STRING,
        allowNull: false,
    },
    Bio: {
        type: Sequenlize.STRING,
        allowNull: false
    },
});

module.exports = { Photographer }