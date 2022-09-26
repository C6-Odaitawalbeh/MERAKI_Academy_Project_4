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
        <p className="websiteName"><b>E-Commerce App</b></p>
        <p className="p-sign-up"><b>Sign-Up</b></p>

        <form className="rigester-form" onSubmit={handleSubmit}>

          <input 
          className="input"
          type="text"
          placeholder="First Name"
          onChange={(e) => {RegisterContext.setfirstName(e.target.value)}}
          ></input>

          <input
          className="input"
          type="text"
          placeholder="Last Name"
          onChange={(e)=>{RegisterContext.setlastName(e.target.value)}}
          ></input>

          
          <input
          className="input"
          type="text"
          placeholder="Contry"
          onChange={(e)=>{RegisterContext.setCountry(e.target.value)}}
          ></input>

          <input
          className="input"
          type="text"
          placeholder="City"
          onChange={(e)=>{RegisterContext.setCity(e.target.value)}}
          ></input>

          <input className="input"
          type="email"
          placeholder="Enter E-mail"
          onChange={(e)=>{RegisterContext.setEmail(e.target.value)}}
          ></input>

          <input
          className="input"
          type="password"
          placeholder="Enter Password"
          onChange={(e)=>{RegisterContext.setPassword(e.target.value)}}
          ></input>

          <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          onChange={(e)=>{RegisterContext.setConfirmPassword(e.target.value)}}
          ></input>

          <button className="button-register" disabled={RegisterContext.setfirstName}>Sign-Up</button>

        </form>

        {RegisterContext.message && <div style={{color: "red"}}>{RegisterContext.message}</div>}

      </div>
    </div>
    </>
  )
};

export default Register;
