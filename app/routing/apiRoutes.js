const apiRouter = require('express').Router();
const friends = require('../data/friends');

apiRouter.get('/friends', function(req, res){
    res.json(friends);
});

apiRouter.post('/friends', function(req, res){
//Logic for friend matching here
});

module.exports = apiRouter;