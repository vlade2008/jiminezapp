var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function (req, res) {
    models.Template.create({
        name: req.body.name
    }).then(function (data) {
        res.json(data)
    });
});

router.get('/get', function (req, res) {
    models.Template.findAll().then(function (data) {
        res.json(data)
    });

})

router.post('/update', function (req, res) {
    models.Template.update({
        name: req.body.name
    }, {
            where: {
                id: req.body.id
            }
        }).then(function (data) {
            var result = {
                status: 'Success'
            }
            res.json(result)
        })
})

router.get('/:template_id/destroy', function (req, res) {
    models.Template.destroy({
        where: {
            id: req.params.template_id
        }
    }).then(function (data) {
        var result = {
            status: 'Success'
        }
        res.json(result)
    });
});


module.exports = router;
