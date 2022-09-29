import React, { useContext, useState } from "react";
import { productContext } from "../contexts/main";
import axios from "axios";
import { loginContext } from "../contexts/login";

const EditProduct = () => {

    const productCompContext = useContext(productContext);
    const loginCompContext = useContext(loginContext);

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [NewShortDescription, setNewShortDescription] = useState('');

    const editProduct = (id) => {
        axios.put(`http://localhost:5000/products/manage/${id}`,
        {
          title: newTitle,
          description: newDescription,
          price: newPrice,
          quantity: newQuantity,
          location: newLocation,
          shortDescription: NewShortDescription 
        },{headers: {Authorization: `Bearer ${loginCompContext.token}`},})
        .then((result)=>{
          console.log(result);
        })
        .catch((err)=>{
          console.log(err);
        })
      }

    return (
        <>
        <div>
            <input 
            className="input"
            type="text"
            placeholder="Title"
            onChange={(e)=>{setNewTitle(e.target.value);}}
            ></input>

            <input
            className="input"
            type="text"
            placeholder="Discription"
            onChange={(e)=>{setNewDescription(e.target.value);}}
            ></input>

            <input
            className="input"
            type="text"
            placeholder="Short Discription"
            onChange={(e)=>{setNewShortDescription(e.target.value);}}
            ></input>

            <input
            className="input"
            type="tex"
            placeholder="Price"
            onChange={(e)=>{setNewPrice(e.target.value);}}
            ></input>

            <input
            className="input"
            type="tex"
            placeholder="Quantity"
            onChange={(e)=>{setNewQuantity(e.target.value);}}
            ></input>

            <input
            className="input"
            type="tex"
            placeholder="Located"
            onChange={(e)=>{setNewLocation(e.target.value);}}
            ></input>
        </div>

        <button
        className="button-update"
        id={productCompContext.editState}
        onClick={(e)=>{editProduct(productCompContext.editState)}}
        >UPDATE</button>
        </>
    )
};

export default EditProduct;