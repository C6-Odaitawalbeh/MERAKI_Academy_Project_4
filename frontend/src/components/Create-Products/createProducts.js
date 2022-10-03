import axios from "axios";
import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/login";
import { useNavigate } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { productContext } from "../contexts/main";
import { FcLeft } from "react-icons/fc";


const Creat = () => {
  const loginCompContext = useContext(loginContext);
  const productCompContext = useContext(productContext);

  const history = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [shorttitle, setShortttitle] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState("633791cf37b11ff4da1d5402");
  const [message, setMeesage] = useState("");
  const [categories, setCategories] = useState("");

  // cloudName => dykjbbeoi
  // POST https://api.cloudinary.com/v1_1/demo/image/upload
  // add upload preset =>  eeshop

  const uploadImage = async () => {

    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', "eeshop");

    // send form to cloudenary
    await axios.post(`https://api.cloudinary.com/v1_1/dykjbbeoi/upload`,form)
    .then((result)=>{
      console.log(result.data.secure_url);
      setImage(result.data.secure_url);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

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
            shorttitle,
            image,
            userId,
            categories
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
          onChange={(e)=>{setFile(e.target.files[0])}}
        />

        <button onClick={uploadImage}>upload</button>

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
            setShortttitle(e.target.value);
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

        <textarea
          className="input-edit-product"
          type="tex"
          placeholder="Categories"
          onChange={(e) => {
            setCategories(e.target.value);
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
