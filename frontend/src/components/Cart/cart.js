import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { productContext } from "../contexts/main";
import { loginContext } from "../contexts/login";
import {
  FcDislike,
  FcApproval,
  FcCurrencyExchange,
  FcPlus,
  FcLeft
} from "react-icons/fc";
import "./style.css";
import { orderContext } from "../contexts/order";
import { Link, useNavigate } from "react-router-dom";
import { FcShipped } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";

const Cart = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);
  const orderCompContext = useContext(orderContext);

  const [productElem, setProductElem] = useState([]);

  const history = useNavigate();

  const showCart = () => {
    axios
      .get("http://localhost:5000/cart/show", {
        headers: {
          Authorization: `Bearer ${loginCompContext.token}`,
        },
      })
      .then((result) => {
        setProductElem(result.data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  useEffect(() => {
    showCart();
  }, []);

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
          const newCart = productElem.filter((item, index) => {
            return item._id !== id;
          });
          setProductElem(newCart);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("err");
      throw err;
    }
  };

  const updateTotalPrice = async (id) => {
   await axios
      .put(
        `http://localhost:5000/products/manage/${id}`,
        {
          count: orderCompContext.count,
        },
        { headers: { Authorization: `Bearer ${loginCompContext.token}` } }
      )
      .then((result) => {
        console.log(result);
        showCart();
        const newProductAfterUpdate = productCompContext.product.map(
          (item, index) => {
            if (item._id == id) {
              item.count = result.data.count;
            }
            return newProductAfterUpdate;
          })
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  var totalCount = 0;
  console.log(totalCount);

  orderCompContext.setTotalPrice(totalCount);

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
    {/* <div className="shopping-cart-name">
        <h3>Shopping cart</h3>
      </div> */}
      <div className="cart-container">
        <div className="cart">
          {productElem.map((item, index) => {
            totalCount = totalCount + item.product.price * item.product.count;
            orderCompContext.setTotalPrice(totalCount);
            return (
              <>
                <div key={index} className="cart-prduct">
                  <div className="image-div-cart">
                    <img
                      className="product-image-cart"
                      src={item.product.image}
                    />

                    <div className="count">
                      <button className="button-count" onClick={()=>{updateTotalPrice(item.product._id)}}>Submit</button>

                      <input
                        className="input-count"
                        type="number"
                        onChange={(e) => {
                          orderCompContext.setCount(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>

                  <div className="words-cart">
                    <p className="title">{item.product.title}</p>
                    <hr></hr>
                    <p className="description">{item.product.price}$</p>
                    <hr></hr>
                    <p className="description">
                      Item Quantity: {item.product.quantity}
                    </p>
                  </div>
                  <div className="delete-item-from-cart">
                    <FcDislike
                      className="delete-icon"
                      size={24}
                      onClick={() => {
                        deleteFromCart(item._id);
                      }}
                    />
                    <p>delete item</p>
                  </div>
                </div>

                
              </>
            );
          })}
        </div>
        <div className="CheckOut">
          <p className="span-total">Total Price</p>
          <spnan className="total-price">
            {totalCount} $ <FcCurrencyExchange size={25} />
          </spnan>
          <button className="button-checkout" onClick={()=>{history("/cart/by")}}>
            CheckOut <FcApproval className="icon-checkout" size={25} />
          </button>
        </div>
      </div>
      <footer className="footer">
        <div className="div1">
          <div className="left-area">
            <h2>Content</h2>
            <ul className="box">
              <li>e.shop.support@gmail.com</li>
              <li>+189-8469-1898</li>
              <li>Amman, JORDAN</li>
              <li>www.eshop.com</li>
              <li>9989</li>
            </ul>
          </div>
        </div>

        <div className="div2-grid">
          <ul className="reigth-area">
            <div>
              <li className="link-area">
                <h2>Useful Link</h2>
                <ul className="box h-box">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                </ul>
              </li>
            </div>

            <div>
              <li>
                <h2>Recent Post</h2>
                <ul className="box">
                  <li>
                    <a href="#">Lorem</a>
                  </li>
                  <li>
                    <a href="#">Lorem</a>
                  </li>
                  <li>
                    <a href="#">Lorem</a>
                  </li>
                  <li>
                    <a href="#">Lorem</a>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h2>Newletter</h2>
          <form action="" className="form-search">
            <div className="search-box">
              <input type="text" name="" id=""></input>
              <button className="btnn" type="submit">
                search
              </button>
            </div>
          </form>

          <div className="socials">
            <a href="#">
              <i className="fa fa-facebook">
                <FaFacebookF />
              </i>
            </a>
            <a href="#">
              <i className="fa fa-instagram">
                <FaInstagram />
              </i>
            </a>
            <a href="#">
              <i className="fa fa-twitter">
                <BsTwitter />
              </i>
            </a>
            <a href="#">
              <i className="fa fa-youtube">
                <ImYoutube />
              </i>
            </a>
          </div>
        </div>
        <div className="footer-buttom">
          <h2 className="web">
            e <FcShipped size={50} /> shop
          </h2>
          <p>All Right reversed by &copy;creativo 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Cart;
