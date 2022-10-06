import React, { useContext } from "react";
import { productContext } from "../contexts/main";
import { FcLike, FcUndo, FcLeft } from "react-icons/fc";
import "./style.css";
import axios from "axios";
import { loginContext } from "../contexts/login";
import { useNavigate } from "react-router-dom";

const ProductDetailes = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);

  const history = useNavigate();

  const sendToCart = (id) => {
    axios
      .post(
        `http://localhost:5000/cart`,
        {
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${loginCompContext.token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        // console.log(res.data.product);
        productCompContext.setProductItemId(res.data.product);
      })
      .catch((err) => {
        // console.log(err);
        throw err;
      });
  };

  // console.log(productCompContext.productIdDetailes._id);

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
      <div>
        <div className="container-detailes-product">
          <div>
            <img
              className="image-product-detailess"
              src={productCompContext.productIdDetailes.image}
            />
          </div>

          <div className="prduct-detailes-words">
            <h1 className="title-detailess">
              {productCompContext.productIdDetailes.title}
            </h1>
            <hr></hr>
            <h5 className="detailess">
              <b className="textt">Description:</b>{" "}
              {productCompContext.productIdDetailes.description}
            </h5>
            <hr></hr>
            <p className="detailess">
              <b className="textt">About This Item:</b>{" "}
              {productCompContext.productIdDetailes.shorttitle}
            </p>
            <hr></hr>
            <p className="detailess">
              <b className="textt">Located:</b>{" "}
              {productCompContext.productIdDetailes.location}
            </p>
            <hr></hr>
            <p className="detailess">
              <b className="textt">Quantity:</b>{" "}
              {productCompContext.productIdDetailes.quantity}
            </p>
            <hr></hr>
            <p className="detailess">
              <b className="textt">Price:</b>{" "}
              {productCompContext.productIdDetailes.price}
            </p>
          </div>

          <div className="icon-love-product">
            <div className="fclike-icon">
              <FcLike
                size={40}
                onClick={() => {
                  sendToCart(productCompContext.productIdDetailes._id);
                }}
              />
            </div>
            <div>
              <FcUndo
                className="undo-icon"
                size={30}
                onClick={() => {
                  history(-1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailes;
