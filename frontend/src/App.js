import "./App.css";
import React, { createContext, useState } from "react";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

export const newContext = createContext();

function App() {
  // const [token, setToken] = useState(localStorage.getItem("token") || "");
  // const [isLoogedIn, setIsLoogedIn] = useState(true);
  return ( 
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
