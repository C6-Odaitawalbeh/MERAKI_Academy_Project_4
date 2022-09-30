const express = require('express');

const { createNewProducts, getAllProducts, updateProductsById, getProductsById, deleteProductsById, searchProduct, filterProduct, getProductByPage } = require('../controllers/product');
const authentication = require('../middlewaers/authentication');
const authorization = require('../middlewaers/authorization');

const productRouter = express.Router();

productRouter.post('/create', authentication, authorization("CREATE_PRODUCT") ,createNewProducts);
productRouter.get('/', getAllProducts);
productRouter.get('/search/:id', getProductsById);
productRouter.get('/search_1', searchProduct);
productRouter.put('/manage/:id', authentication, authorization("UPDATE_PRODUCT") ,updateProductsById);
productRouter.delete('/manage/:id', authentication, authorization("DELETE_PRODUCT"), deleteProductsById);
productRouter.get('/search_2', filterProduct);
productRouter.get('/page', getProductByPage);

module.exports = productRouter;