const htmlRouter = require('express').Router();
const path = require('path');
const friends = require('../data/friends');

htmlRouter.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, '../public/', 'home.html'));
});

htmlRouter.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, '../public/', 'survey.html'));
});

module.exports = htmlRouter;