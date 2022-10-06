import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { loginContext } from "../contexts/login";
import { Link, useNavigate } from "react-router-dom";
import { FcShipped, FcLeft, FcHome } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const Login = () => {
  const loginCompContext = useContext(loginContext);

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginCompContext.login();
  };

  const clientId = `922531268610-dvasq8corobmvg4j4lr1ovq2a74u90m2.apps.googleusercontent.com`;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    loginCompContext.setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    // console.log("failed", err);
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
      <div className="login">
        <div className="login-page">
          <p className="website-name">
            <b>e shop</b>
          </p>
          <p className="login-name">
            <b>Login</b>
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="email"
              placeholder="Enter E-mail"
              onChange={(e) => {
                loginCompContext.setEmail(e.target.value);
              }}
            ></input>

            <input
              className="input"
              type="password"
              placeholder="Entr Password"
              onChange={(e) => {
                loginCompContext.setPassword(e.target.value);
              }}
            ></input>

            <button className="button-login">Login</button>

            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </form>

          {loginCompContext.message && (
            <div className="meesage-login">{loginCompContext.message}</div>
          )}

          <p className="register">If You Dont Have Account</p>
          <div className="link-div">
            <Link className="link-register" to="/register">
              Create New Account
            </Link>
          </div>
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
export default Login;
