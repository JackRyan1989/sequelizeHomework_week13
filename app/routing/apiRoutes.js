const express = require('express');
const apiRouter = require('express').Router();
const friends = require('../data/friends');
const htmlRoutes = require('./htmlRoutes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

apiRouter.get('/friends', function (req, res) {
    res.json(friends);
});

app.use('/', htmlRoutes);

apiRouter.post('/friends', function (req, res) {
    //Logic for friend matching here
    let name = req.body.name;
    let answers = req.body.scores;
    let friendVal = [];
    let smallest = 50;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //Convert the user answers to integers
    for (let i = 0; i < answers.length; i++) {
        answers[i] = parseInt(answers[i]);
    }
    //turn the existing answer arrays from other users into single values
    for (let i = 0; i < friends.length; i++) {
        friendVal.push(friends[i].scores.reduce(reducer));
    }
    //Reduce your own array of answers into a single value.
    let myScore = answers.reduce(reducer);
    //Now get the difference between the friend's score and your score
    let diffArr = friendVal.map(function (item, index) {
        return Math.abs(item - myScore);
    });
    //Loop through and find which friend score has the smallest difference from yours
    for (let i = 0; i < diffArr.length; i++) {
        if (diffArr[i] < smallest) {
            smallest = diffArr[i];
        }
    }
    //Get the array index of the friend with the smallest number:
    foundFriend = diffArr.indexOf(smallest);
    //Index the friends array with the number from foundFriend to get your particular friend
    myFriend = friends[foundFriend];
    console.log(myFriend);
    res.json(myFriend);
});

module.exports = apiRouter;

