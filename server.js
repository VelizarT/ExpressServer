const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
    res.render('home.hbs'); 
});

//sends back json with error message
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to connect to server' 
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});