import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { headerContext } from "../contexts/header";
import { productContext } from "../contexts/main";
import { FcLeft } from "react-icons/fc";

import "./style.css";

const Search = () => {
  const headerCompContext = useContext(headerContext);
  const productCompContext = useContext(productContext);

  const history = useNavigate();

  return (
    <>
      <div className="back">
        <FcLeft
          className="back-icon-react"
          size={30}
          onClick={() => {
            history(-1);
          }}
        />
        <p className="back-string">Back</p>
      </div>
      <div className="search-products-page">
        {headerCompContext.searchProd.map((item, index) => {
          return (
            <div className="product-search" key={index}>
              <div className="image-div-search">
                <img className="product-image" alt="" src={item.image} />
              </div>

              <div className="words-search">
                <p className="title">{item.title}</p>
                <p className="description">{item.description}</p>
                <h6 className="price">
                  <b>{item.price}</b> $
                </h6>
                <p
                  className="show-more-detailes"
                  onClick={(e) => {
                    productCompContext.setProductIdDetailes(item);
                    history("/product/detailes");
                  }}
                >
                  Show More Detailes
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
