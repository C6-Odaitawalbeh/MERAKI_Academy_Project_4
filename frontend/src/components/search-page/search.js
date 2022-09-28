import React, { useContext } from "react";
import { headerContext } from "../contexts/header";
import "./style.css";

const Search = () => {
  const headerCompContext = useContext(headerContext);

  return (
    <>
      <div className="search-page">
        {headerCompContext.searchProd.map((item, index) => {
          return (
            <div className="product" key={index}>

              <div className="image-div">
                <img className="product-image" src={item.image} />
              </div>

              <div className="words">
              <p className="title">{item.title}</p>
              <p className="Date">{item.date}</p>
              <p className="description">Description: {item.description}</p>
              <p className="description">Description: {item.shortDescription}</p>
              <p className="location">Located: {item.location}</p>
              <p className="price">Price: {item.price}</p>
              <p className="quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
