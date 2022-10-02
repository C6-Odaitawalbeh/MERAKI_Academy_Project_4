import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

const ProductProvider = (props) => {
  
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState('');
  // console.log(productId);
  const [editState, setEditState] = useState();
  const [productItemId, setProductItemId] = useState("");
  // console.log(productItemId);
  // const [buttonAddToCart, setButtonAddToCart] = useState(true);
  const [limit, setLimit] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);

  const [idProductEdit, setIdProductEdit] = useState('')
  const [productIdDetailes, setProductIdDetailes] = useState([]);
  // console.log(productIdDetailes);
  const [productFilterByPrice, setProductFilterByPrice] = useState([]);
  console.log(productFilterByPrice);
  const history = useNavigate();

  const showMyProduct = async (pageNumber) => {
    try {
      await axios.get(`http://localhost:5000/products/page?page=${pageNumber}&&limit=${limit}`)
      .then((result) => {
        setProduct(result.data);
      });
    } catch (err) {
      console.log(err);
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
    showMyProduct,
  };

  return (
    <productContext.Provider value={state}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductProvider;
