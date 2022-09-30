import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const loginAdminContext = createContext();

const LoginAdminProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMeesage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [found, setFound] = useState(false);

  const history = useNavigate();

  const saveToken = (token) => {
    setToken(token);
    localStorage.setItem("tokenAdmin", token);
  };

  const saveId = (id) => {
    setUserId(id);
    localStorage.setItem("userIdAdmin", id);
  };

  const saveRole = (role) => {
    setAdminRole(role);
    localStorage.setItem("adminRole", role);
  };

  useEffect(() => {
    saveToken(localStorage.getItem("tokenAdmin"));
  }, []);

  const adminLogin = async () => {
    try {
      const result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      saveToken(result.data.token);
      saveId(result.data.userId);
      saveRole(result.data.role);
      setFound(true);

      history("/admin/controller/page");

      setIsLoggedIn(true);
    } catch (err) {
      console.log(err.response.data.message);
      setMeesage(err.response.data.message);
    }
  };

  const state = {
    email,
    setEmail,
    password,
    setPassword,
    token,
    setToken,
    message,
    setMeesage,
    isLoggedIn,
    setIsLoggedIn,
    userId,
    setUserId,
    adminRole,
    setAdminRole,
    found,
    setFound,
    adminLogin,
  };

  return (
    <loginAdminContext.Provider value={state}>
      {props.children}
    </loginAdminContext.Provider>
  );
};

export default LoginAdminProvider;
