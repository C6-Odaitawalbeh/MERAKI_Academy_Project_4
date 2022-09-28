import axios from "axios";
import React, { createContext, useState } from "react";

export const headerContext = createContext();

const HeaderProvider = (props) => {

    const [search, setSearch] = useState('');
    const [filterByPrice, setFilterByPrice] = useState('');
    const [name, setName] = useState('');

    // const searchProduct = async () => {
    //     try {
    //         await axios.get(`http://localhost:5000/products`)
    //         .then((rseult)=>{

    //         })
    //     } catch (error) {
            
    //     }
    // }

    const state = {
        search,
        setSearch,
        filterByPrice,
        setFilterByPrice,
        name,
        setName,
        // searchProduct
    }

    return (
        <headerContext.Provider value={state}>
            {props.children}
        </headerContext.Provider>
    )
};

export default HeaderProvider;