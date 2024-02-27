const { Sequelize, sequelize } = require('../db');
const Photo = sequelize.define('photo', {
    PhotoID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    AlbumID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'albums', 
            key: 'AlbumID'
        }
    },
    PhotographerID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'photographers', 
            key: 'PhotographerID'
        }
    },
    LocationID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'locations', 
            key: 'LocationID'
        }
    },
    PhotoPath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Caption: {
        type: Sequelize.STRING,
        allowNull: false 
    },
});

module.exports = { Photo };
