import React, { useContext } from "react";
import { productContext } from "../contexts/main";
import { FcLike, FcUndo } from "react-icons/fc";
import "./style.css";
import axios from "axios";
import { loginContext } from "../contexts/login";

const ProductDetailes = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);

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
        console.log(res);
        console.log(res.data.product);
        productCompContext.setProductItemId(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(productCompContext.productIdDetailes._id);

  return (
    <>
      <div>
        
        <div className="container-detailes-product">
          <div>
            <img className="image-product-detailess" src={productCompContext.productIdDetailes.image} />
          </div>

          <div className="prduct-detailes-words">
            <h1 className="title-detailess">{productCompContext.productIdDetailes.title}</h1>
            <hr></hr>
            <h5 className="detailess"><b className="textt">Description:</b> {productCompContext.productIdDetailes.description}</h5>
            <hr></hr>
            <p className="detailess"><b className="textt">About This Item:</b> {productCompContext.productIdDetailes.shorttitle}</p>
            <hr></hr>
            <p className="detailess"><b className="textt">Located:</b> {productCompContext.productIdDetailes.location}</p>
            <hr></hr>
            <p className="detailess"><b className="textt">Quantity:</b> {productCompContext.productIdDetailes.quantity}</p>
            <hr></hr>
            <p className="detailess"><b className="textt">Price:</b> {productCompContext.productIdDetailes.price}</p>
          </div>

          <div className="icon-love-product">
            <div className="fclike-icon"><FcLike size={40} onClick={()=>{sendToCart(productCompContext.productIdDetailes._id)}} /></div>
            <div><FcUndo size={30} /></div>
          </div>
        </div>
      </div>
      </>
  );
};

export default ProductDetailes;
