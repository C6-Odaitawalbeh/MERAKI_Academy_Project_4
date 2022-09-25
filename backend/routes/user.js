const express = require('express');

const userRouter = express.Router();

const { createUser } = require('../controllers/user');

userRouter.post('/register', createUser)

module.exports = userRouter;