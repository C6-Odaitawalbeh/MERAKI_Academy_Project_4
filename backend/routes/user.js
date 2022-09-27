const express = require('express');

const userRouter = express.Router();

const { createUser, getAllUsers, getUserById, editProfile, deleteProfile } = require('../controllers/user');
const authentication = require('../middlewaers/authentication');
const authorization = require('../middlewaers/authorization');

userRouter.post('/register', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/profile/:id', authentication, authorization("UPDATE_PROFILE") ,editProfile);
userRouter.delete('/profile/:id', authentication, authorization("DELETE_PRODUCT") ,deleteProfile);

module.exports = userRouter;