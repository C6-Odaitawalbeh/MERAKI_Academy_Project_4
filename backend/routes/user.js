const express = require('express');

const userRouter = express.Router();

const { createUser, getAllUsers, getUserById, editProfile, deleteProfile } = require('../controllers/user');

userRouter.post('/register', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/profile/:id', editProfile);
userRouter.delete('/profile/:id', deleteProfile);
module.exports = userRouter;