import axios from "axios";
import React, { createContext, useContext } from "react";
import { loginContext } from "../../components/contexts/login";
import { productContext } from "../contexts/main";

export const cartContext = createContext();

const CartProvider = (props) => {
  const loginCompContext = useContext(loginContext);
  const productCompContext = useContext(productContext);

  const sendToCart = async () => {
    try {
      await axios.post(`http://localhost:5000/cart`, {
        headers: {
          Authorization: `Bearer ${loginCompContext.token}`,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const showCart = async () => {
    try {
      await axios.get(`http://localhost:5000/cart/show`, {
        headers: {
          Authorization: `Bearer ${loginCompContext.token}`,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <cartContext.Provider value></cartContext.Provider>
  )
};
