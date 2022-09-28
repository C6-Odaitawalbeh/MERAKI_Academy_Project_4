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
      await axios.post(
        `http://localhost:5000/cart`,
        {
          product: productCompContext.productId,
          userId: loginCompContext,
        },
        {
          headers: {
            Authorization: `Bearer ${loginCompContext.token}`,
          },
        }
      );
    } catch (err) {
        console.log(err);
        throw err;
    }


  };
};
