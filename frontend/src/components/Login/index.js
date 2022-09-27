import React, { useContext } from "react";
import './style.css';
import { loginContext } from "../contexts/login";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const loginCompContext = useContext(loginContext);
  
  const history = useNavigate();

  const handleSubmit = async  (e) => {
    e.preventDefault();
    await loginCompContext.login();

  };

  // const path = () => {
  //   if (loginCompContext.isLoggedIn) {
  //     history('/register');
  //   }
  // };

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
          onChange={(e) => {loginCompContext.setEmail(e.target.value);}}></input>

          <input
          className="input"
          type="password"
          placeholder="Entr Password"
          onChange={(e) => {loginCompContext.setPassword(e.target.value);}}></input>

          <button
          className="button-login"
          >Login</button>

        </form>

        {loginCompContext.message && <div className="meesage-login">{loginCompContext.message}</div>}


        {/* <p className="register">If You Dont Have Account</p> */}
        <div className="link-register"><Link to='/register'>Create Account</Link></div>

      </div>
    </div>
  )
};
export default Login;




// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { newContext } from "../../App";
// import { useNavigate } from "react-router-dom";
// import "./style.css";

// const Login = () => {

//   const { setToken } =useContext(newContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
  
//   const loginButton = () => {
//     axios
//       .post(`http://localhost:5000/login`, { email, password })
//       .then((res) => {
//         console.log(res.data.token);
//         setToken(res.data.token);
//         localStorage.setItem("token", res.data.token);
//         // navigate("/");
//       })
//       .catch((err) => {
//         console.log(err);
//         setMessage(err);
//       });
//   };

//   return (
//     <>
//       <div className="login">
//         <div className="login-container">
//           <p>
//             <b>Login:</b>
//           </p>
//           <input
//             className="login-input"
//             type="text"
//             placeholder="Email"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           ></input>

//           <input
//             className="login-input"
//             type="password"
//             placeholder="Password"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           ></input>

//           <button className="login-button" onClick={loginButton}>
//             Login
//           </button>

//           <div className="message">{message}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;