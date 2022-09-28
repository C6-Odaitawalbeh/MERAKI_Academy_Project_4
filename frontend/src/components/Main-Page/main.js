import React, { useContext, useEffect } from "react";
import { productContext } from "../contexts/main";
import "./style.css";

const Main = () => {
  const productCompContext = useContext(productContext);

  useEffect(() => {
    // console.log("Main")
    productCompContext.showMyProduct();
    // console.log(productCompContext.product)
  },[]);

  const productMoreDetailes = async (id) => {
    productCompContext.setProductId(id);
  }

  return (
    <>
      <div className="main-page">
        {productCompContext.product.map((item, index) => {
          return (
            <div className="product" key={index} onClick={()=>{productMoreDetailes(item._id)}} >

              <div className="image-div">
              <img className="product-image" src={item.image} />
              </div>
              
              <div className="words">
              <p className="title">{item.title}</p>
              <p className="description">Description: {item.shortDescription}</p>
              <p className="location">Located: {item.location}</p>
              <p className="price">Price: {item.price}</p>
              </div>

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
