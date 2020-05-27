const express = require('express');
const path = require('path');
const app = express();

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Data/user.sqlite'
});
// const Users = require('./database/user');

const Users = sequelize.define('users', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

var insertData = (params) => {
    sequelize.sync().then(() => {
        console.log('Data is inserted');
        Users.create(params);
    });
    // .then(function() {
    //     return Users.findAll();
    // })
    // .then(function(users) {
    //     console.log(users);
    // });
};

const PORT = 8000;

//middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/templates')));
//middleware

app.get('/', (req, res) => {
    res.send('Hello, welcome to the initial build of the quora app');
});

//log-in
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname) + '/templates/login.html');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.end();
});
//log-in

//sign-in
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname) + '/templates/sign-in.html');
});

app.post('/signup', (req, res) => {
    insertData(req.body);
});
//sign-in

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//Tasks for tomorrow
//export the db user and store the credentials
//use passport for authentication
//Create page for login