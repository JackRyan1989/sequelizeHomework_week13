const router = require('express').Router();
const friends = require('../data/friends');

router.get('/friends', function(req, res){
    res.json(friends);
});

router.post('/friends', function(req, res){
//
});

module.exports = router;