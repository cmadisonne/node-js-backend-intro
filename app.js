// The main Point of Entry for To Do node.JS app

const config = require('./config'); //Get config exports

const express = require('express');
const app = express();
const port = 3000;
//Start listening for connections
console.log("Listening on port " + port + "...");
app.listen(port);

//Mongo Stuff
const mongoose= require('mongoose');

// Actually connect to the database (lets use a promise)
mongoose.connect(config.getDbConnectionString(),{ useNewUrlParser: true }).then(()=> {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);

const setupController = controller = require('./controllers/setupController');
setupController(app);