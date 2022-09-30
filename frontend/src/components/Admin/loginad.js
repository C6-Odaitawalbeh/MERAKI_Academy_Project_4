import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { loginAdminContext } from "../contexts/indexadmin";


const LoginAd = () => {
    const adminloginCompContext = useContext(loginAdminContext);

    const handleSubmit = async  (e) => {
        e.preventDefault();
        await adminloginCompContext.adminLogin();
    };

    return (
        <div className="login">
      <div className="login-page">
        <p className="website-name"><b>E-Commerce App</b></p>
        <p className="login-name"><b>Login</b></p>

        <form className="login-form" onSubmit={handleSubmit}>

          <input
          className="input"
          type="email"
          placeholder="Enter E-mail"
          onChange={(e) => {adminloginCompContext.setEmail(e.target.value);}}></input>

          <input
          className="input"
          type="password"
          placeholder="Entr Password"
          onChange={(e) => {adminloginCompContext.setPassword(e.target.value);}}></input>

          <button
          className="button-login"
          // onClick={loginCompContext.setFound(true)}
          >Login</button>

        </form>

        {adminloginCompContext.message && <div className="meesage-login">{adminloginCompContext.message}</div>}


        <p className="register">If You Dont Have Account</p>
        <div className="link-div"><Link className="link-register" to='/register'>Create New Account</Link></div>

      </div>
    </div>
    );
};

export default LoginAd;