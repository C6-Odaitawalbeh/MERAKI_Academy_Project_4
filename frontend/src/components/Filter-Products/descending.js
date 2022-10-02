import axios from "axios";
import React, { useEffect, useState } from "react";

const Descending = () => {
    
  const [descendingProducts, setDescendingProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/filter_2`)
      .then((result) => {
        // console.log(result.data);
        setDescendingProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);

  return (
    <>
      <div>
        {descendingProducts.map((item, index) => {
          return (
            <div key={index} className="">
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

export default Descending;
