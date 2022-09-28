import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

const ProductProvider = (props) => {
  
  const [product, setProduct] = useState([]);

  const history = useNavigate();

  const showMyProduct = async () => {
    try {
      await axios.get(`http://localhost:5000/products`).then((result) => {
        setProduct(result.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const state = {
    product,
    setProduct,
    showMyProduct,
  };

  return (
    <productContext.Provider value={state}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductProvider;
