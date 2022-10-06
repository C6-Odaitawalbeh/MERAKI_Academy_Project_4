import axios from "axios";
import React, { createContext, useState } from "react";

export const productContext = createContext();

const ProductProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState("");

  const [editState, setEditState] = useState();
  const [productItemId, setProductItemId] = useState("");

  const [limit] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);

  const [idProductEdit, setIdProductEdit] = useState("");
  const [productIdDetailes, setProductIdDetailes] = useState([]);

  const [productFilterByPrice, setProductFilterByPrice] = useState([]);

  const [categoriesFilter, setCategoriesFilter] = useState([]);

  const showMyProduct = async (pageNumber) => {
    try {
      await axios
        .get(
          `http://localhost:5000/products/page?page=${pageNumber}&&limit=${limit}`
        )
        .then((result) => {
          setProduct(result.data);
          setCategoriesFilter(result.data);
        });
    } catch (err) {
      // console.log(err);
      throw err;
    }
  };

  const filterByCategories = async (categories) => {
    try {
      await axios
        .get(
          `http://localhost:5000/products/categories?categories=${categories}`
        )
        .then((result) => {
          // console.log(result.data);
          setCategoriesFilter(result.data);
        });
    } catch (err) {
      // console.log(err);
      throw err;
    }
  };

  const state = {
    product,
    setProduct,
    productId,
    setProductId,
    editState,
    setEditState,
    productItemId,
    setProductItemId,
    pageNumber,
    setPageNumber,
    idProductEdit,
    setIdProductEdit,
    productIdDetailes,
    setProductIdDetailes,
    productFilterByPrice,
    setProductFilterByPrice,
    categoriesFilter,
    setCategoriesFilter,
    showMyProduct,
    filterByCategories,
  };

  return (
    <productContext.Provider value={state}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductProvider;
