const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000; //all environment variables are in process.env!

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);

//next - tells the app that the middleware function is completed
app.use((req, res, next) => {
    var now = new Date().toString();
    // console.log(req);
    var log = `${now}: ${req.method}, ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) =>{
        if(err) {
            console.log('Unable to append to server.log.');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

//express middleware - teaches express how to read from static directory
//express.static() - absolute path to public folder;
//__dirname - path to the project directory; server independent; path to ExpressApp in this case
app.use(express.static(__dirname + '/public')); 

//regiter helper function to use in templates
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home Page',
        welcomeMessage: 'Welcome to my web site!' ,
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
    });
});

app.get('/projects', (req, res) => {
    res.send('Hello Express!');
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