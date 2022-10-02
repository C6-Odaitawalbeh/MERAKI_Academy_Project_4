import axios from "axios";
import React, { useEffect, useState } from "react";

const Ascending = () => {
  const [ascendingProducts, setAscendingProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/filter_1`)
      .then((result) => {
        // console.log(result.data);
        setAscendingProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }, []);

  return (
    <>
      <div>
        {ascendingProducts.map((item, index) => {
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

export default Ascending;
