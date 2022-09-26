import React from "react";
import { useContext } from "react";
import { RegiContext, RegisterContext } from "../contexts/register";
import "./style.css"


const Register = () => {

  const RegisterContext = useContext(RegiContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterContext.addUser();
  };

  return (
    <>
    <div className="rigester-page">
      <div className="sign-up">
        <p>E-Commerce App</p>
        <p>Sign-Up</p>

        <form className="rigester-form">

          <input 
          className="input"
          type="text"
          placeholder="First Name"
          ></input>

          <input
          className="input"
          type="text"
          placeholder="Last Name"
          ></input>

          <input className="input"
          type="email"
          placeholder="Enter E-mail"
          ></input>

          <input
          className="input"
          type="password"
          placeholder="Enter Password"
          ></input>

          <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          ></input>

          <button className="button-register">Sign-Up</button>

        </form>

        {<div></div>}

      </div>
    </div>
    </>
  )
};

export default Register;
