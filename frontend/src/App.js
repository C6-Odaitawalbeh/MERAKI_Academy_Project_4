import "./App.css";
import React, { createContext, useState } from "react";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header/header";
import Main from "./components/Main-Page/main";
import Search from "./components/search-page/search";
import EditProduct from "./components/EditProduct/edit";

export const newContext = createContext();

function App() {
  // const [token, setToken] = useState(localStorage.getItem("token") || "");
  // const [isLoogedIn, setIsLoogedIn] = useState(true);
  return (
    <div className="App">
      {<Header />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/products/search" element={<Search />} />
        <Route path="/edit/prduct" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
