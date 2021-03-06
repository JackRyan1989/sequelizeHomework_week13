//Require both express and path:
const express = require('express');
const path = require('path');
const app = express();

//Set up the port:
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Require the routes:
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Some error handling:
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send('Something broke!');
});


//Listen to the port:
app.listen(port, () => {
    console.log(`App listening on ${port}`);
});

