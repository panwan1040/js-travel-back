const Sequenlize = require('sequelize');
const sequelize = new Sequenlize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './Database/SQBooks.sqlite'
});


module.exports = { Sequenlize, sequelize };