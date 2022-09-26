const express = require('express');

const { sendToCart, showCart, deleteCart } = require('../controllers/cart');

const cartRouter = express.Router();

cartRouter.post('/', sendToCart);
cartRouter.get('/show', showCart);
cartRouter.delete('/delete/:id', deleteCart);

module.exports = cartRouter;