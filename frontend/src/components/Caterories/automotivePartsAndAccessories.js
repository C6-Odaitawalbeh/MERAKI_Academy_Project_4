import React, { useContext } from "react";
import { productContext } from "../contexts/main";
import "./electronic.css";
import { FcLeft } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AutomotivePartsAccessories = () => {
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
      <div className="electronic-container">
        <div className="electronic">
          {productCompContext.categoriesFilter.map((item, index) => {
            return (
              <div key={index} className="electronic-prduct">
                <div className="image-div-electronic">
                  <img
                    className="product-image-electronic"
                    src={item.image}
                  />
                </div>

                <div className="words-cart">
                  <p className="title">{item.title}</p>
                  <hr></hr>
                  <p className="description">{item.price}$</p>
                  <hr></hr>
                  <p className="description">
                    {item.shorttitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
};

export default AutomotivePartsAccessories;