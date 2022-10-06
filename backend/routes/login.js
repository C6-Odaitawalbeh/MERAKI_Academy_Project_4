const express = require('express');

const { login } = require('../controllers/login');
const authentication = require('../middlewaers/authentication');

const loginRoute = express.Router();

loginRoute.post('/',login);

module.exports = loginRoute;