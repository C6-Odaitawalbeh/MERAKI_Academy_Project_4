const express = require('express');

const { sendToCart, showCart, deleteCart } = require('../controllers/cart');
const authentication = require('../middlewaers/authentication');
const authorization = require('../middlewaers/authorization');

const cartRouter = express.Router();

cartRouter.post('/', authentication, sendToCart);
cartRouter.get('/show', authentication, showCart);
cartRouter.delete('/delete/:id', authentication, deleteCart);

module.exports = cartRouter;