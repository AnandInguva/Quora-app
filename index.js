const express = require('express');
const path = require('path');
const app = express();

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Data/users.sqlite'
});
const Users = require('./database');

const PORT = 8000;

//middleware

app.use(express.urlencoded());
app.use(express.json());

//database for users
// const userData = exports.User();
app.get('/', (req, res) => {
    res.send('Hello, welcome to the initial build of the quora app');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname) + '/authentication/login_page.html');
});

//Get the username and password from the user page
app.post('/login', (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});