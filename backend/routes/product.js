const express = require("express");

const {
  createNewProducts,
  getAllProducts,
  updateProductsById,
  getProductsById,
  deleteProductsById,
  searchProduct,
  filterProduct,
  getProductByPage,
  ascendingProduct,
  descendingProduct,
  getProductsByCategories,
} = require("../controllers/product");
const authentication = require("../middlewaers/authentication");
const authorization = require("../middlewaers/authorization");

const productRouter = express.Router();

productRouter.post("/create", authentication, createNewProducts);
productRouter.get("/", getAllProducts);
productRouter.get("/search/:id", getProductsById);
productRouter.get("/search_1", searchProduct);
productRouter.put("/manage/:id", authentication, updateProductsById);
productRouter.delete("/manage/:id", authentication, deleteProductsById);
productRouter.get("/search_2", filterProduct);
productRouter.get("/page", getProductByPage);
productRouter.get("/filter_1", ascendingProduct);
productRouter.get("/filter_2", descendingProduct);
productRouter.get("/categories", getProductsByCategories);

module.exports = productRouter;
