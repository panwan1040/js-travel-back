const express = require('express');
const router = express.Router();
const { Sequelize, sequelize } = require('../db');
const { Location } = require('../model/locations');

// get all
router.get('/locations', (req, res) => {
    Location.findAll().then(locations => {
        res.json(locations);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//route get by id
router.get('/locations/:id', (req, res) => {
    Location.findByPk(req.params.id).then(location => {
        if (!location) {
            res.status(404).send('location not found');
        } else {
            res.json(location);
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// route to create new
router.post('/locations', (req, res) => {
    Location.create(req.body).then(location => {
        res.send(location);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//update
router.put('/locations/:id', (req, res) => {
    Location.findByPk(req.params.id).then(location => {
        if (!location) {
            res.status(404).send('location not found');
        } else {
            location.update(req.body).then(() => {
                res.send(location);
            }).catch(err => {
                res.status(500).send(err);
            })
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

//delete
router.delete('/locations/:id', (req, res) => {
    Location.findByPk(req.params.id).then(location => {
        if (!location) {
            res.status(404).send('location not found');
        } else {
            location.destroy().then(() => {
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