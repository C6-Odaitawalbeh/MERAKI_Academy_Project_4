import React, { useContext, useEffect } from "react";
import { productContext } from "../contexts/main";

const Main = () => {
  const productCompContext = useContext(productContext);

  useEffect(()=>{
    productCompContext.showMyProduct();
  },[]);

  return (
    <>
      <div>
        {productCompContext.product((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
