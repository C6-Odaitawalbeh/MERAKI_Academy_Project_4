import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { productContext } from "../contexts/main";
import { loginContext } from "../contexts/login";
import { FcDislike , FcApproval, FcCurrencyExchange } from "react-icons/fc";
import "./style.css";


const Cart = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);
  const [productElem, setProductElem] = useState([]);
    // console.log(productElem);
  


  useEffect(() => {
    axios.get("http://localhost:5000/cart/show", {
      headers: {
        Authorization: `Bearer ${loginCompContext.token}`,
      },
    })
    .then((result)=>{
        setProductElem(result.data)
    })
    .catch((err)=>{
        console.log(err);
    })
  },[]);


  const deleteFromCart = async (id) => {
    try {
      await axios
        .delete(`http://localhost:5000/cart/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${loginCompContext.token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("err");
      throw err;
    }
  };

 

  return (
    <>
    <div className="shopping-cart-name"><h3>Shopping cart</h3></div>
    <div className="cart-container">
      <div className="cart">
        {productElem.map((item, index) => {
            console.log(item);
            console.log(item.product);
            console.log(item.product.title);
          return (
            <div key={index} className="cart-prduct">
                <div className="image-div-cart">
                    <img className="product-image-cart" src={item.product.image} />
                    <div className="count">
                    <button className="button-count">Submit</button>
                    <input className="input-count"
                    type="number"></input>
                    </div>
                </div>
                
                <div className="words-cart">
                <p className="title">{item.product.title}</p>
                <hr></hr>
                <p className="description">{item.product.price}$</p>
                <hr></hr>
                <p className="description" >Item Quantity: {item.product.quantity}</p>
                </div>
                <div className="delete-item-from-cart">
                  <FcDislike className="delete-icon" size={24} />
                  <p>delete item</p>
                </div>
            </div>
          );
        })}
      </div>
    <div className="CheckOut">
      <p className="span-total">Total Price</p>
      <spnan className="total-price">1000$ <FcCurrencyExchange size={25} /></spnan>
      <button className="button-checkout">CheckOut <FcApproval className="icon-checkout" size={25}/></button>
    </div>
    </div>
    </>
  );
};

export default Cart;
