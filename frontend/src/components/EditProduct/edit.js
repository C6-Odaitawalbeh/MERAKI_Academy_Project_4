import React, { useContext, useState } from "react";
import { productContext } from "../contexts/main";
import axios from "axios";
import { loginContext } from "../contexts/login";
import "./style.css";
import { FcLeft } from "react-icons/fc";
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
  const [message, setMeesage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [file, setFile] = useState(null);

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
          shorttitle: NewShortDescription,
          image: newImage,
        },
        { headers: { Authorization: `Bearer ${loginCompContext.token}` } }
      )
      .then((result) => {
        console.log(result);
        const newProductAfterUpdate = productCompContext.product.map(
          (item, index) => {
            if (item._id == id) {
              item.title = result.data.title;
              item.image = result.data.image;
              item.description = result.data.description;
              item.price = result.data.price;
              item.location = result.data.location;
              item.shorttitle = result.data.shorttitle;
              item.quantity = result.data.quantity;
            }
            return newProductAfterUpdate;
          }
        );
      })
      .catch((err) => {
        // console.log(err);
        throw err;
      });
  };

  // cloudName => dykjbbeoi
  // POST https://api.cloudinary.com/v1_1/demo/image/upload
  // add upload preset =>  eeshop

  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "eeshop");

    // send form to cloudenary
    await axios
      .post(`https://api.cloudinary.com/v1_1/dykjbbeoi/upload`, form)
      .then((result) => {
        // console.log(result.data.secure_url);
        setNewImage(result.data.secure_url);
      })
      .catch((err) => {
        // console.log(err);
        throw err;
      });
  };

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
      <div className="container-edit-product">
        <input
          className="upload-image"
          type="file"
          id="myFile"
          name="filename"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <button onClick={uploadImage}>upload</button>

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
            updateProduct(productCompContext.idProductEdit);
            setMeesage("Done! Update Product");
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
