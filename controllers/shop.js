function createShop(req, res) {
    let Shop = require('../models/shop');
    let newShop = Shop ({
        title: req.body.title,
        description : req.body.description,
    });

    newShop.save()
    .then((savedShop) => {

        //send back the created shop
        res.json(savedShop);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readShop(req, res) {

    let Shop = require("../models/shop");

    console.log("This is the shops present in our website")

    Shop.find({})
    .then((shops) => {
        res.status(200).json(shops);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readShop(req, res) {

    let Shop = require("../models/shop");

    Shop.findById({_id : req.params.id})
    .then((shop) => {
        res.status(200).json(shop);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateShop(req, res){

    let Shop = require("../models/shop");

    Shop.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.descrption,
        })
    .then((updatedShop) => {
        res.status(200).json(updatedShop);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteShop(req, res){

    let Shop = require("../models/shop");

    Shop.findOneAndRemove({_id : req.params.id})
    .then((deletedShop) => {
        res.status(200).json(deletedShop);
    }, (err) => {
        res.status(500).json(err);
    });

 }

module.exports.reads = readShop;
module.exports.create = createShop;
module.exports.read = readShop;
module.exports.update = updateShop;
module.exports.delete = deleteShop;