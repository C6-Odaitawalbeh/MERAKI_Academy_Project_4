import axios from "axios";
import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/login";
import { useNavigate } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { productContext } from "../contexts/main";

const Creat = () => {
  const loginCompContext = useContext(loginContext);
  const productCompContext = useContext(productContext);

  const history = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("633791cf37b11ff4da1d5402");
  const [message, setMeesage] = useState("");

  const addNewProduct = async () => {
    try {
      await axios
        .post(
          "http://localhost:5000/products/create",
          {
            title,
            description,
            price,
            quantity,
            location,
            shortDescription,
            image,
            userId,
          },
          {
            headers: {
              Authorization: `Bearer ${loginCompContext.token}`,
            },
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
          // setMeesage(err);
        });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <>
      <div className="container-edit-product">
        <div className="back">
          <p>
            <AiOutlineRollback className="back-to-page" size={28} />
          </p>
          <p className="back-string">Back</p>
        </div>

        <input
          className="upload-image"
          type="file"
          id="myFile"
          name="filename"
        />

        <textarea
          className="input-edit-product"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>

        <textarea
          className="input-edit-product"
          type="text"
          placeholder="Discription"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>

        <textarea
          className="input-edit-product"
          type="text"
          placeholder="Short Discription"
          onChange={(e) => {
            setShortDescription(e.target.value);
          }}
        ></textarea>

        <input
          className="input-edit-product"
          type="number"
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>

        <input
          className="input-edit-product"
          type="number"
          placeholder="Quantity"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        ></input>

        <textarea
          className="input-edit-product"
          type="tex"
          placeholder="Located"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></textarea>

        <div>
          <button
            className="button-update-product"
            onClick={(e) => {
              addNewProduct();
              setMeesage("Done! Create New Product");
            }}
          >
            CREATE
          </button>
        </div>

        {message && <div className="messamge-update-product">{message}</div>}
      </div>
    </>
  );
};

export default Creat;
