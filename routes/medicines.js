var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function (req, res) {
    models.Medicine.create({
      name: req.body.name,
      brandname: req.body.brandname,
      form_unit: req.body.form_unit,
      dispense: req.body.dispense,
      take: req.body.take,
      sig: req.body.sig,
    }).then(function(data) {
      res.json(data)
    });
});

router.get('/get',function (req, res){
    models.Medicine.findAll().then(function(data){
        res.json(data)
    });

})

router.post('/update', function (req,res){
    models.Medicine.update({
        name: req.body.name,
        brandname: req.body.brandname,
        form_unit: req.body.form_unit,
        dispense: req.body.dispense,
        take: req.body.take,
        sig: req.body.sig,        
    },{
        where: {
            id: req.body.id
        }
    }).then(function (data){
        res.json(data)
    })
})

router.get('/:medicine_id/destroy', function (req, res) {
    models.Medicine.destroy({
        where: {
            id: req.params.medicine_id
        }
    }).then(function (data) {
        var result = {
            status: 'Success'
        }
        res.json(result)
    });
});


module.exports = router;
