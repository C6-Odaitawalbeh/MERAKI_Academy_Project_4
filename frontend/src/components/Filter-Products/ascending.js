import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcLeft } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./style.css"

const Ascending = () => {
  const [ascendingProducts, setAscendingProducts] = useState([]);

  const history = useNavigate();

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
        {ascendingProducts.map((item, index) => {
          return (
            <div key={index} className="product-search">
              <div className="image-div-search">
                <img className="product-image" src={item.image} />
              </div>

              <div className="words-search-ascen">
                {/* <h6 className="">{item.title}</h6> */}
                <h6 className="">Description: {item.description}</h6>
                <h6 className="price"><b>{item.price}</b> $</h6>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ascending;
