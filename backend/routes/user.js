const express = require('express');

const userRouter = express.Router();

const { createUser, getAllUsers, getUserById, editProfile, deleteProfile, getUserName } = require('../controllers/user');
const authentication = require('../middlewaers/authentication');
const authorization = require('../middlewaers/authorization');

userRouter.post('/register', createUser);
userRouter.get('/',authentication, getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/profile/:id', authentication, authorization("UPDATE_PROFILE") ,editProfile);
userRouter.delete('/profile/:id', authentication ,deleteProfile);

module.exports = userRouter;