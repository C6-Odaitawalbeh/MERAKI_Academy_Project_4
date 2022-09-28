import React, { createContext, useContext } from "react";
import { loginContext } from "../../components/contexts/login";
import { productContext } from "../contexts/main";

export const cartContext = createContext();

const CartProvider = (props) => {

    const loginCompContext = useContext(loginContext);
    const productCompContext = useContext(productContext);

}