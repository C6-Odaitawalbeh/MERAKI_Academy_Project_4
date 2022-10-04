import React, { useContext } from "react";
import { productContext } from "../contexts/main";
import "./electronic.css";
import { FcLeft } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const BeautyAndpersonalcare = () => {
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
          {productCompContext.categoriesFilter.map((item, index) => {
            return (
              <div key={index} className="product-search">
                <div className="image-div-search">
                  <img
                    className="product-image"
                    src={item.image}
                  />
                </div>

                <div className="words-search-ascen">
                  <h6 className="title">{item.description}</h6>
                  <h6 className="price"><b>{item.price}</b> $</h6>
                  {/* <p className="description">
                    {item.shorttitle}
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default BeautyAndpersonalcare;