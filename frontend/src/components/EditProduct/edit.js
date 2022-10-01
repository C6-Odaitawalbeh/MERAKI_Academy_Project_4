import React, { useContext, useState } from "react";
import { productContext } from "../contexts/main";
import axios from "axios";
import { loginContext } from "../contexts/login";

const EditProduct = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [newLocation, setNewLocation] = useState("");
  const [NewShortDescription, setNewShortDescription] = useState("");

  const updateProduct = (id) => {
    axios
      .put(
        `http://localhost:5000/products/manage/${id}`,
        {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(productCompContext.idProductEdit);

  return (
    <>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        ></input>

        <input
          className="input"
          type="text"
          placeholder="Discription"
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        ></input>

        <input
          className="input"
          type="text"
          placeholder="Short Discription"
          onChange={(e) => {
            setNewShortDescription(e.target.value);
          }}
        ></input>

        <input
          className="input"
          type="number"
          placeholder="Price"
          onChange={(e) => {
            setNewPrice(e.target.value);
          }}
        ></input>

        <input
          className="input"
          type="number"
          placeholder="Quantity"
          onChange={(e) => {
            setNewQuantity(e.target.value);
          }}
        ></input>

        <input
          className="input"
          type="tex"
          placeholder="Located"
          onChange={(e) => {
            setNewLocation(e.target.value);
          }}
        ></input>

        <button
          className="button-update"
          onClick={(e) => {
            updateProduct(productCompContext.idProductEdit);
          }}
        >
          UPDATE
        </button>
      </div>
    </>
  );
};

export default EditProduct;
