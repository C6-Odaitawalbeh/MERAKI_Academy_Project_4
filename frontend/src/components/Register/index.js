import React from "react";
import { useContext } from "react";
import { RegiContext, RegisterContext } from "../contexts/register";
import { FcShipped, FcLeft, FcHome } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Register = () => {
  const RegisterContext = useContext(RegiContext);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterContext.addUser();
  };

  return (
    <>
      <div className="back_to_home">
        <div className="home">
          <FcHome
            size={35}
            onClick={() => {
              history("/");
            }}
          />
        </div>
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
      </div>
      <div className="rigester-page">
        <div className="sign-up">
          <p className="websiteName">
            <b>e shop</b>
          </p>
          <p className="p-sign-up">
            <b>Sign-Up</b>
          </p>

          <form className="rigester-form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                RegisterContext.setfirstName(e.target.value);
              }}
            ></input>

            <input
              className="input"
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                RegisterContext.setlastName(e.target.value);
              }}
            ></input>

            <input
              className="input"
              type="text"
              placeholder="Contry"
              onChange={(e) => {
                RegisterContext.setCountry(e.target.value);
              }}
            ></input>

            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={(e) => {
                RegisterContext.setCity(e.target.value);
              }}
            ></input>

            <input
              className="input"
              type="email"
              placeholder="Enter E-mail"
              onChange={(e) => {
                RegisterContext.setEmail(e.target.value);
              }}
            ></input>

            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                RegisterContext.setPassword(e.target.value);
              }}
            ></input>

            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                RegisterContext.setConfirmPassword(e.target.value);
              }}
            ></input>

            <button
              className="button-register"
              disabled={RegisterContext.setfirstName}
            >
              Sign-Up
            </button>
          </form>

          {RegisterContext.message && (
            <div className="messamge-register">
              <b>{RegisterContext.message}</b>
            </div>
          )}
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

export default Register;
