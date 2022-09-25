const express = require('express');

const userRouter = express.Router();

const { createUser, getAllUsers, getUserById, editProfile } = require('../controllers/user');

userRouter.post('/register', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/profile/:id', editProfile);

module.exports = userRouter;