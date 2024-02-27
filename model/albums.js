const { Sequenlize, sequelize } = require('../db');
const Album = sequelize.define('album', {
    AlbumID: {
        type: Sequenlize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    AlbumName: {
        type: Sequenlize.STRING,
        allowNull: false,
    },
    Description: {
        type: Sequenlize.STRING,
        allowNull: false
    },

});

module.exports = { Album }