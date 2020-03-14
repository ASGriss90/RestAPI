// Tools
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Help parse the data from the post into json ob
app.use(bodyParser.json());

// Import routes into app.js
const postsRoute = require('./routes/post');

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on home');
});

app.use('/posts', postsRoute);



// Connect to DB
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false', { useNewUrlParser: true }, ()=> 
    console.log('Connected to DB')
);

app.listen(3000);

