const express = require('express');

const { sendToCart, showCart, deleteCart, showCartById, updateCartById, deleteCartByUserId } = require('../controllers/cart');
const authentication = require('../middlewaers/authentication');
const authorization = require('../middlewaers/authorization');

const cartRouter = express.Router();

cartRouter.post('/', authentication, sendToCart);
cartRouter.get('/show', authentication, showCart);
cartRouter.delete('/delete/:id', authentication, deleteCart);
cartRouter.get('/showcart/:id',authentication, showCartById);
cartRouter.put('/update/:id',authentication, updateCartById);
cartRouter.delete('/delete/cart/:id', authentication, deleteCartByUserId);

module.exports = cartRouter;