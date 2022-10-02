import React, { useContext } from "react";
import { productContext } from "../contexts/main";

const FilterByPrice = () => {
  const productCompContext = useContext(productContext);

  return (
    <>
      <div>
        {productCompContext.productFilterByPrice.map((item, index) => {
          return (
            <div key={index}>
              <div className="">
                <img className="" src={item.image} />
              </div>
              <div className="">
                <p className="">{item.title}</p>
                <p className="">Description: {item.description}</p>
                <p className="">Description: {item.shorttitle}</p>
                <p className="">Located: {item.location}</p>
                <p className="">Price: {item.price}</p>
                <p className="">Quantity: {item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterByPrice;
