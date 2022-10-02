import React, { useContext } from "react";
import "./style.css";
import { loginContext } from "../contexts/login";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const loginCompContext = useContext(loginContext);

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginCompContext.login();
  };

  return (
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
  );
};
export default Login;
