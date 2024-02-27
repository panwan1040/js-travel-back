const Sequelize = require('sequelize');
const sequelize = require('../db'); 

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
            model: 'album', 
            key: 'AlbumID'
        }
    },
    PhotographerID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'photographer', 
            key: 'PhotographerID'
        }
    },
    LocationID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'location', 
            key: 'LocationID'
        }
    },
    PhotoPath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Caption: {
        type: Sequelize.STRING,
        allowNull: true 
    },
});

module.exports = Photo;
