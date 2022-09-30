import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  // const [limit, setLimit] = useState(8);
  // const [pageNumber, setPageNumber] = useState(1);

  const history = useNavigate();

  useEffect(() => {
    productCompContext.showMyProduct();
  }, [productCompContext.pageNumber]);

  const productMoreDetailes = async (id) => {
    productCompContext.setProductId(id);
  };

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

  let btnRef = useRef();

  const onBtnClick = e => {
    if(btnRef.current){
      btnRef.current.setAttribute("disabled", "disabled");
    }
  }

  // useEffect(()=>{
  //   axios.get(`http://localhost:5000/products/page?page=${pageNumber}&&limit=${limit}`)
  //   .then((result)=>{
  //     console.log(result.data);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // },[pageNumber]);

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
                <h3 className="title">{item.title}</h3>
                <p className="price">Price: {item.price}</p>

                  <button
                    ref={btnRef}
                    id={item._id}
                    onClick={() => {
                      sendToCart(item._id);
                      productCompContext.setButtonAddToCart(false);
                      onBtnClick();
                    }}
                  >
                    Add To Cart
                  </button>

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
      <div>
        <button onClick={()=>{productCompContext.setPageNumber(productCompContext.pageNumber+1)}}>More</button>
        <button onClick={()=>{productCompContext.setPageNumber(productCompContext.pageNumber-1)}}>Less</button>
      </div>
    </>
  );
};

export default Main;
