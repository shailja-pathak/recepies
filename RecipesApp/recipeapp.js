var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    newRoute = require('./routes/new'),
    indexRoutes = require('./routes/index'),

    Recipes = require('./models/recipes');

mongoose.connect('mongodb://localhost/recipe_app', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(methodOverride ('_method'));
app.use(express.static(__dirname + '/public'));
app.use(newRoute);
app.use(indexRoutes);

app.listen(8080, process.env.IP, function (){
    console.log('Server running!!')
});