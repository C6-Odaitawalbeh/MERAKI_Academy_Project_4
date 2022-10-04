const express = require('express');

const { addOrder, getAllOrder } = require('../controllers/order');

const authentication = require('../middlewaers/authentication');

const orderRouter = express.Router();

orderRouter.post("/", authentication, addOrder);
orderRouter.get("/",authentication, getAllOrder);

module.exports = orderRouter;