const express = require('express');
const apiRouter = require('express').Router();
const friends = require('../data/friends');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

apiRouter.get('/friends', function (req, res) {
    res.json(friends);
});

apiRouter.post('/friends', function (req, res) {
    //Logic for friend matching here
    let answers = req.body;
    console.log(answers);
});

module.exports = apiRouter;