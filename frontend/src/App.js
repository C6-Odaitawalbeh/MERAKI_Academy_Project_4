import "./App.css";
// import React, { createContext, useState } from "react";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header/header";
import Main from "./components/Main-Page/main";
import Search from "./components/search-page/search";
import EditProduct from "./components/EditProduct/edit";
import Cart from "./components/Cart/cart";
import Controller from "./components/ControllerProduct/admin";
import Creat from "./components/Create-Products/createProducts";
import ProductDetailes from "./components/Product-More-Detailes/detailesProduct";
import HandelUsersAndDelete from "./components/Delete-Users/deleteuser";
import Ascending from "./components/Filter-Products/ascending";
import Descending from "./components/Filter-Products/descending";
import FilterByPrice from "./components/Filter-Products/filterByPrice";

// export const newContext = createContext();

function App() {
  return (
    <div className="App">
      {<Header />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Main />} />
        <Route path="/products/search" element={<Search />} />
        <Route path="/edit/prduct" element={<EditProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/manage" element={<Controller />}/>
        <Route path="/admin/manage/create" element={<Creat />} />
        <Route path="/product/detailes" element={<ProductDetailes />} />
        <Route path="/admin/manage/users" element={<HandelUsersAndDelete />} />
        <Route path="/products/filter_1" element={<Ascending />} />
        <Route path="/products/filter_2" element={<Descending />} />
        <Route path="/products/search_1" element={<FilterByPrice />} />
      </Routes>
    </div>
  );
}

export default App;
