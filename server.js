const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000; //all environment variables are in process.env!

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public')); 

//regiter helper function to use in templates
// hbs.registerHelper('getCurrentYear', () => {
//     return new Date().getFullYear();
// });

// hbs.registerHelper('screamIt', (text) => {
//     return text.toUpperCase();
// });

app.get('/', (req, res) => {
    res.render('home.hbs'); 
});

// app.get('/about', (req, res) => {
//     res.render('about.hbs', {
//         title: 'About Page',
//     });
// });

// app.get('/projects', (req, res) => {
//     res.render('projects.hbs', {
//         title: 'Projects'
//     });
// });

//sends back json with error message
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to connect to server' 
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});