const express = require('express');
const path = require('path');

const routes = {
    authRoutes: require('./routes/auth')
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));