var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipes = require('../models/recipes');
var newRoute = require('./new');


var methodOverride = require('method-override');
// router.get('/new', function (req, res){
//     res.render('new');
// });
//
// router.post('/new', function (req, res){
//     var name = req.body.recipe.name;
//     var image = req.body.recipe.image;
//     var description = req.body.recipe.description;
//     var newRecipe = {name:name, image:image, description:description};
//     Recipes.create(newRecipe, function (err, displayRecipe){
//         if (err) {
//             console.log(err);
//         } else{
//
//             console.log(displayRecipe);
//             res.redirect('/')
//         }
//     });
//
// });

router.use(methodOverride("_method"));

router.get('/', function (req, res){
    Recipes.find({}, function (err, allRecipes){
        if (err) {
            console.log(err);
        } else {

            res.render('landing', {recipes: allRecipes})
        }
    });
});



router.get('/:id', function (req, res){
Recipes.findById(req.params.id, function (err, showRecipe){
    if (err) {
        res.redirect('/')
    } else {
        res.render('show', {recipe: showRecipe})
    }
});
});

router.get('/:id/edit', function (req, res){
    Recipes.findById(req.params.id, function (err, editRecipe){
        if (err) {
            res.redirect('/')
        } else {
            res.render('edit', {recipe: editRecipe});
        }
    });
});


router.put('/:id/', function (req, res){
    Recipes.findByIdAndUpdate(req.params.id, req.body.recipe,function (err, updateRecipe){
        if(err) {
            console.log(err);
        } else {
            res.redirect('/' + req.params.id)
        }
    });
});


router.delete('/:id', function (req, res){
    Recipes.findByIdAndRemove(req.params.id, function (err){
        if(err) {
            res.redirect('/');
        } else {
            res.redirect('/')
        }
    });
});


module.exports = router;