var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipes = require('../models/recipes');



router.get('/new', function (req, res){
    res.render('new');
});

router.post('/new', function (req, res){
    var name = req.body.recipe.name;
    var image = req.body.recipe.image;
    var description = req.body.recipe.description;
    var newRecipe = {name:name, image:image, description:description};
    Recipes.create(newRecipe, function (err, displayRecipe){
        if (err) {
            console.log(err);
        } else{

            console.log(displayRecipe);
            res.redirect('/')
        }
    });

});

module.exports = router;

