import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const loginContext = createContext();

const LoginProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMeesage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [adminRole, setAdminRole] = useState("");
  const [found, setFound] = useState(false);
  const [profile, setProfile] = useState([]);
  const [userIdd, setUserIdd] = useState('');
  console.log(userId);

  const history = useNavigate();

  const saveToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const saveId = (id) => {
    setUserId(id);
    localStorage.setItem("userId", id);
  };

  const saveRole = (role) => {
    setAdminRole(role);
    localStorage.setItem("Role", role);
  };

  useEffect(() => {
    saveToken(localStorage.getItem("token"));
  }, []);

  const login = async () => {
    try {
      const result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      },{headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      // console.log(result);
      saveToken(result.data.token);
      saveId(result.data);
      saveRole(result.data.role._id);
      setFound(true);
      history("/"); // main page
      setIsLoggedIn(true);
    } catch (err) {
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
    profile,
    setProfile,
    userIdd,
    setUserIdd,
    login,
  };

  return (
    <loginContext.Provider value={state}>
      {props.children}
    </loginContext.Provider>
  );
};

export default LoginProvider;