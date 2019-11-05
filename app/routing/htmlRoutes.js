const htmlRouter = require('express').Router();
const path = require('path');
const friends = require('../data/friends');

htmlRouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/', 'home.html'));
});

htmlRouter.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, '../public/', 'survey.html'));
});

//Get the javascript files:
htmlRouter.get('/homeJS', function(req, res){
    res.sendFile(path.join(__dirname, '../js/', 'home.js'));
});

htmlRouter.get('/surveyJS', function(req, res){
    res.sendFile(path.join(__dirname, '../js/', 'survey.js'));
});

module.exports = htmlRouter;