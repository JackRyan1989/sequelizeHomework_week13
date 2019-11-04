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
    let smallest = 50;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let i = 0; i < answers.length; i++) {
        answers[i] = parseInt(answers[i]);
    }
    for (let i = 0; i < friends.length; i++) {
        friendVal.push(friends[i].scores.reduce(reducer));
     }
     let myScore = answers.reduce(reducer); 
     let diffArr = friendVal.map(function(item, index){
        return Math.abs(item - myScore);
     });
     for (let i = 0; i < diffArr.length; i++) {
         if (diffArr[i] < smallest) {
            smallest = diffArr[i];
         }
     } 
     foundFriend = diffArr.indexOf(smallest);
     myFriend = friends[foundFriend];
});

module.exports = apiRouter;

