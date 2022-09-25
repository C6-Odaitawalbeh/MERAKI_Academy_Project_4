const express = require('express');

const { createNewProducts, getAllProducts, updateProductsById, getProductsById, deleteProductsById, searchProduct } = require('../controllers/product');

const productRouter = express.Router();

productRouter.post('/create', createNewProducts);
productRouter.get('/', getAllProducts);
productRouter.get('/:id',getProductsById);
productRouter.get('/search',searchProduct);
productRouter.put('/manage/:id', updateProductsById);
productRouter.delete('/manage/:id', deleteProductsById);


module.exports = productRouter;