const express = require('express');
const router = express.Router();
const { Sequelize, sequelize } = require('../db');
const { Album } = require('../model/albums');

// get all
router.get('/albums', (req, res) => {
    Album.findAll().then(albums => {
        res.json(albums);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//route get by id
router.get('/albums/:id', (req, res) => {
    Album.findByPk(req.params.id).then(album => {
        if (!album) {
            res.status(404).send('album not found');
        } else {
            res.json(album);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to create new
router.post('/albums', (req, res) => {
    Album.create(req.body).then(album => {
        res.send(album);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//update
router.put('/albums/:id', (req, res) => {
    Album.findByPk(req.params.id).then(album => {
        if (!album) {
            res.status(404).send('album not found');
        } else {
            album.update(req.body).then(() => {
                res.send(album);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//delete
router.delete('/albums/:id', (req, res) => {
    Album.findByPk(req.params.id).then(album => {
        if (!album) {
            res.status(404).send('album not found');
        } else {
            album.destroy().then(() => {
                res.send("delete id :", req.params.id)
            }).catch(err => {
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

module.exports = router;