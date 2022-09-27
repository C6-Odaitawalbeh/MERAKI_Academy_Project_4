import "./App.css";
import React, { createContext, useState } from "react";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import Login from "./components/Login/index";

export const newContext = createContext();

function App() {
  // const [token, setToken] = useState(localStorage.getItem("token") || "");
  // const [isLoogedIn, setIsLoogedIn] = useState(true);
  return ( 
    <>
    {/* <newContext.Provider
        value={{
          token,
          setToken,
          isLoogedIn,
          setIsLoogedIn
        }}
        > */}
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
    {/* </newContext.Provider> */}
    </>
    
  );
}

export default App;
