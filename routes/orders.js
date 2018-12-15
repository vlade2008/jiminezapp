var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function (req, res) {
    models.Order.create({
        order: req.body.order,
        dateOrder: req.body.dateOrder,
        PatientId: req.body.patientId,
    }).then(function (data) {
        res.json(data)
    });
});

router.get('/get', function (req, res) {
    models.Order.findAll().then(function (data) {
        res.json(data)
    });

})


module.exports = router;
