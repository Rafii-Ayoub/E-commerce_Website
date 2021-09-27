function createCategory(req, res) {
    let Category = require('../models/category');
    let newCategory = Category ({
        title: req.body.title,
        description : req.body.description,
    });

    newCategory.save()
    .then((savedCategory) => {

        //send back the created category
        res.json(savedCategory);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readCategory(req, res) {

    let Category = require("../models/category");

    console.log("This is the category present in our website")

    Category.find({})
    .then((categories) => {
        res.status(200).json(categories);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readCategory(req, res) {

    let Category = require("../models/category");

    Category.findById({_id : req.params.id})
    .then((category) => {
        res.status(200).json(category);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateCategory(req, res){

    let Category = require("../models/category");

    Category.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.descrption,
        })
    .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteCategory(req, res){

    let Category = require("../models/category");

    Category.findOneAndRemove({_id : req.params.id})
    .then((deletedCategory) => {
        res.status(200).json(deletedCategory);
    }, (err) => {
        res.status(500).json(err);
    });

 }

module.exports.reads = readCategory;
module.exports.create = createCategory;
module.exports.read = readCategory;
module.exports.update = updateCategory;
module.exports.delete = deleteCategory;