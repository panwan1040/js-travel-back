const express = require('express');

const { Sequenlize, sequelize } = require('./db');
// const { Album } = require('./model/albums');
// const { Location } = require('./model/location');
// const { Photographer } = require('./model/photographer');
// const { Photo } = require('./model/photos');

const albumRoutes = require('./routes/route-album');


const app = express();

app.use(express.json());
app.use(albumRoutes)




sequelize.sync();



const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log(`Listen on port ${port}...`);
})