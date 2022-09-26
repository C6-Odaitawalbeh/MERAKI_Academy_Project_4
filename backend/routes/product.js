const express = require('express');

const { createNewProducts, getAllProducts, updateProductsById, getProductsById, deleteProductsById, searchProduct, filterProduct } = require('../controllers/product');

const productRouter = express.Router();

productRouter.post('/create', createNewProducts);
productRouter.get('/', getAllProducts);
productRouter.get('/:id',getProductsById);
productRouter.get('/search_1',searchProduct);
productRouter.put('/manage/:id', updateProductsById);
productRouter.delete('/manage/:id', deleteProductsById);
productRouter.get('/search_2', filterProduct);

module.exports = productRouter;