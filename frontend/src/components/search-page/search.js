import React, { useContext } from "react";
import { headerContext } from "../contexts/header";
import "./style.css";

const Search = () => {
  const headerCompContext = useContext(headerContext);

  return (
    <>
      <div className="search-products-page">
        {headerCompContext.searchProd.map((item, index) => {
          return (
            <div className="product-search" key={index}>
              <div className="image-div-search">
                <img className="product-image" src={item.image} />
              </div>

              <div className="words-search">
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
                {/* <p className="description">Description: {item.shorttitle}</p> */}
                {/* <p className="location">Located: {item.location}</p> */}
                <h6 className="price"><b>{item.price}</b> $</h6>
                {/* <p className="quantity">Quantity: {item.quantity}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
