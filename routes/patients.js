var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function (req, res) {
    models.Patient.create({
        name: req.body.name,
        address: req.body.address,
        birthdate: req.body.birthdate,
        contact_number: req.body.contact_number,
    }).then(function (data) {
        res.json(data)
    });
});

router.get('/get', function (req, res) {
    models.Patient.findAll().then(function (data) {
        res.json(data)
    });

})

router.get('/getPatientAndOrder', function (req, res){
    models.Patient.findAll({
        include: [models.Order]
    }).then(function (data){
        res.json(data)
    })
})

router.post('/update', function (req, res) {
    models.Patient.update({
        name: req.body.name,
        address: req.body.address,
        birthdate: req.body.birthdate,
        contact_number: req.body.contact_number,
    }, {
            where: {
                id: req.body.id
            }
        }).then(function (data) {
            res.json(data)
        })
})

router.get('/:patient_id/destroy', function (req, res) {
    models.Patient.destroy({
        where: {
            id: req.params.patient_id
        }
    }).then(function (data) {
        var result = {
            status: 'Success'
        }
        res.json(result)
    });
});


module.exports = router;
