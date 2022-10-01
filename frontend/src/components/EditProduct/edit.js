import React, { useContext, useState } from "react";
import { productContext } from "../contexts/main";
import axios from "axios";
import { loginContext } from "../contexts/login";
import "./style.css"
// import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const EditProduct = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);

  const history = useNavigate();

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [newLocation, setNewLocation] = useState("");
  const [NewShortDescription, setNewShortDescription] = useState("");
  const [message, setMeesage] = useState('');
  const [newImage, setNewImage] = useState();

  const updateProduct = (id) => {
    axios
      .put(
        `http://localhost:5000/products/manage/${id}`,
        {
          image: newImage,
          title: newTitle,
          description: newDescription,
          price: newPrice,
          quantity: newQuantity,
          location: newLocation,
          shortDescription: NewShortDescription,
        },
        { headers: { Authorization: `Bearer ${loginCompContext.token}` } }
      )
      .then((result) => {
        console.log(result);
        const newProductAfterUpdate = productCompContext.product.map((item,index)=>{
          if (item._id == id) {
            item.title = result.data.title;
            item.image = result.data.image;
            item.description = result.data.description;
            item.price = result.data.price;
            item.location = result.data.location;
            item.shortDescription = result.data.shortDescription;
            item.quantity = result.data.quantity;
          }
          return newProductAfterUpdate;
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(productCompContext.idProductEdit);

  return (
    <>
      <div className="container-edit-product">

        <input className="upload-image" type="file" id="myFile" name="filename" />

        <textarea
          className="input-edit-product"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        ></textarea>

        <textarea
          className="input-edit-product"
          type="text"
          placeholder="Discription"
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        ></textarea>

        <textarea
          className="input-edit-product"
          type="text"
          placeholder="Short Discription"
          onChange={(e) => {
            setNewShortDescription(e.target.value);
          }}
        ></textarea>

        <input
          className="input-edit-product"
          type="number"
          placeholder="Price"
          onChange={(e) => {
            setNewPrice(e.target.value);
          }}
        ></input>

        <input
          className="input-edit-product"
          type="number"
          placeholder="Quantity"
          onChange={(e) => {
            setNewQuantity(e.target.value);
          }}
        ></input>

        <textarea
          className="input-edit-product"
          type="tex"
          placeholder="Located"
          onChange={(e) => {
            setNewLocation(e.target.value);
          }}
        ></textarea>

        <button
          className="button-update-product"
          onClick={(e) => {
            updateProduct(productCompContext.idProductEdit); setMeesage("Done! Update Product");
          }}
        >
          UPDATE
        </button>

        {message && <div className="messamge-update-product">{message}</div>}
      </div>
    </>
  );
};

export default EditProduct;
