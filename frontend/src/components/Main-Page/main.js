import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../contexts/login";
import { productContext } from "../contexts/main";
import "./style.css";
import { FcDeleteDatabase } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";

const Main = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);
  const [admin, setAdmin] = useState(true);
  

  const history = useNavigate();

  useEffect(() => {
    productCompContext.showMyProduct();
  }, []);

  const productMoreDetailes = async (id) => {
    productCompContext.setProductId(id);
  };

  const sendToCart =  (id) => {
      axios.post(`http://localhost:5000/cart`,{
        product: id
        
        // productCompContext.productId
      } , {
        headers: {
          Authorization: `Bearer ${loginCompContext.token}`,
        },
      })
      .then((res)=>{
        // console.log(res.data.product);
        productCompContext.setProductItemId(res.data.product)
      })
      .catch((err)=>{
        console.log(err);
      })
  };

  return (
    <>
      <div className="main-page">
        {productCompContext.product.map((item, index) => {
          return (
            <div
              className="product"
              key={index}
              onClick={() => {
                productMoreDetailes(item._id);
              }}
            >
              <div className="image-div">
                <img className="product-image" src={item.image} />
              </div>

              <div className="words">
                <p className="title">{item.title}</p>
                <p className="description">
                  Description: {item.shortDescription}
                </p>
                <p className="location">Located: {item.location}</p>
                <p className="price">Price: {item.price}</p>

                <button id={item._id} onClick={(e)=>{sendToCart(item._id)}}>Add To Cart</button>

                {/* 
              {loginCompContext.adminRole == "6331e15b77850e5ab71f0d4d" ? ( 
              <>
              <div>
                {admin && <FcDeleteDatabase size={28} />}
                {admin && <AiFillEdit size={28}  onClick={(e)=>{history('/edit/prduct'); productCompContext.setEditState(item._id)}}/>}
              </div>
              </>
              ) : (
                <>
                </>
              )
              } */}

                {/* {loginCompContext.adminRole == "6331e15b77850e5ab71f0d4d" ? ( loginCompContext.found && <div>
                {admin && <FcDeleteDatabase size={28} />}
                {/* <Link to="/edit/prduct" onClick={(e)=>{productCompContext.setEditState(item._id)}}>Edit Product</Link> */}
                {/* { admin && <AiFillEdit size={28}  onClick={(e)=>{history('/edit/prduct'); productCompContext.setEditState(item._id)}}/>} */}
                {/* </div>) : <div></div>} */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
