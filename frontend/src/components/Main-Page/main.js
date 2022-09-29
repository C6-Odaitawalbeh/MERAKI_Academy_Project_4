import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/main";
import "./style.css";

const Main = () => {

  const productCompContext = useContext(productContext);

  // const [newTitle, setNewTitle] = useState('');
  // const [newDescription, setNewDescription] = useState('');
  // const [newPrice, setNewPrice] = useState('');
  // const [newQuantity, setNewQuantity] = useState('');
  // const [newLocation, setNewLocation] = useState('');
  // const [NewShortDescription, setNewShortDescription] = useState('');

  useEffect(() => {
    productCompContext.showMyProduct();
  },[]);

  const productMoreDetailes = async (id) => {
    productCompContext.setProductId(id);
  }

  // const editProduct = (id) => {
  //   axios.put(`http://localhost:5000/products/manage/${id}`,
  //   {
  //     title: newTitle,
  //     description: newDescription,
  //     price: newPrice,
  //     quantity: newQuantity,
  //     location: newLocation,
  //     shortDescription: NewShortDescription 
  //   })
  //   .then((result)=>{
  //     console.log(result);
  //   })
  //   .catch((err)=>{
  //     console.log(err.message);
  //   })
  // }
  // console.log(productCompContext.editState);
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

              <div>
                <p><Link to="/edit/prduct" onClick={(e)=>{productCompContext.setEditState(item._id)}}>Edit Product</Link></p>
              </div>

              </div>

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
