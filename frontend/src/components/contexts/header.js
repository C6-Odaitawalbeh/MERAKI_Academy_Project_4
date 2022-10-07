import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const headerContext = createContext();

const HeaderProvider = (props) => {
  const [search, setSearch] = useState("");
  const [filterByPrice, setFilterByPrice] = useState("");
  const [name, setName] = useState("");
  const [searchProd, setSearchProd] = useState();
  const [cartNumber, setCartNumber] = useState(0);

  const history = useNavigate();

  const searchProduct = async () => {
    try {
      await axios
        .get(`http://localhost:5000/products/search_1?title=${search}`)
        .then((rseult) => {
          setSearchProd(rseult.data.searchProduct);
          history("/products/search");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const state = {
    search,
    setSearch,
    filterByPrice,
    setFilterByPrice,
    name,
    setName,
    searchProd,
    setSearchProd,
    searchProduct,
    cartNumber,
    setCartNumber
  };

  return (
    <headerContext.Provider value={state}>
      {props.children}
    </headerContext.Provider>
  );
};

export default HeaderProvider;
