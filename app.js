// kill -9 $(lsof -t -i:8000)
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const userRoute = require('./controllers/user');
const questionRoutes = require('./controllers/question');
const app = express();
const PORT = 8000;

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/templates')));

app.get('/', (req, res) => {
    res.send("<h1 align='center'> Quora clone</h1>");
});

app.use('/auth', userRoute);
app.use('/post', questionRoutes);
// app.use('/question', questionRoutes);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname) + '/templates/login.html');
    // res.sendFile('./login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname) + '/templates/sign-in.html');
});

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname) + '/templates/post.html');
});

app.post('/question', (req, res) => {
    console.log(req.body.question);
});

// app.use('/user');

module.exports = app;