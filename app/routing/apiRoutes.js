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
    let name = req.body.name;
    let answers = req.body.scores;
    let friendVal = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let i = 0; i < answers.length; i++) {
        answers[i] = parseInt(answers[i]);
    }
    for (let i = 0; i < friends.length; i++) {
        let subArr = answers.map(function(item, index){
           return Math.abs(item - friends[i].scores[index]);
        });
        friendVal.push(subArr.reduce(reducer));
        console.log(subArr.reduce(reducer));
        console.log(friendVal);
     }
     let myScore = answers.reduce(reducer); 
     console.log(myScore);
});

module.exports = apiRouter;

