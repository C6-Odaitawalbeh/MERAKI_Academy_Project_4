import React, { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegiContext = createContext();

const RegisterProvider = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("6331e12c77850e5ab71f0d4b");

  const history = useNavigate();

  const addUser = async () => {
    try {
      await axios
        .post("http://localhost:5000/user/register", {
          firstName,
          lastName,
          country,
          city,
          email,
          password,
          confirmPassword,
          role,
        })
        .then((res) => {
          setMessage("Create Account");
          history("/login");
        })
        .catch((err) => {
          if (!firstName) {
            setMessage("Enter Your First Name");
          } else if (!lastName) {
            setMessage("Enter Last Name");
          } else if (!country) {
            setMessage("Enter Your Country");
          } else if (!city) {
            setMessage("Enter Your City");
          } else if (!password) {
            setMessage("Enter Your Password");
          } else if (!confirmPassword) {
            setMessage("Enter Your RE-Password");
          } else if (password !== confirmPassword) {
            setMessage("Password does not valid");
          } else {
            setMessage("Email already exist");
          }
        });
    } catch (err) {
      throw err;
    }
  };

  const state = {
    setfirstName,
    setlastName,
    setCountry,
    setCity,
    setEmail,
    setPassword,
    setMessage,
    setConfirmPassword,
    message,
    confirmPassword,
    password,
    email,
    city,
    country,
    lastName,
    firstName,
    role,
    addUser,
  };

  return (
    <RegiContext.Provider value={state}>{props.children}</RegiContext.Provider>
  );
};

export default RegisterProvider;
