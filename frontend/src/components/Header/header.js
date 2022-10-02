import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { headerContext } from "../contexts/header";
import { loginContext } from "../contexts/login";
import { FcSearch, FcSettings, FcEngineering, FcShipped } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./style.css";

const Header = () => {
  const headerCompContext = useContext(headerContext);
  const loginCompContext = useContext(loginContext);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const click = () => {
    history("/");
  };

  const logOut = () => {
    localStorage.clear();
    loginCompContext.setToken(null);
    history("/login");
    loginCompContext.setIsLoggedIn(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header">

          <p className="name-website" onClick={click}>
            <b>e <FcShipped size={30} /> shop</b>
          </p>

          <div className="search">
            <input
              className="search-bar"
              placeholder="Search"
              onChange={(e) => {
                headerCompContext.setSearch(e.target.value);
                headerCompContext.searchProduct();
              }}
            ></input>

            <FcSearch
              size={28}
              className="search-icon"
              onClick={(e) => {
                headerCompContext.searchProduct();
              }}
            />
          </div>

          {/* <select>
            <option>Filter</option>
            <option>Cheapes Products</option>
            <option>Extensive Products</option>
          </select> */}

          {loginCompContext.adminRole === "633790d637b11ff4da1d53fe" ?( <Link className="button-admin" to="/admin/manage" >Prod<FcSettings className="setting-icon" size={28} />ucts</Link>) : (<div></div>)}
          {loginCompContext.adminRole === "633790d637b11ff4da1d53fe" ?( <Link className="button-admin" to="/admin/manage/users" >Us<FcEngineering size={28} />ers</Link>) : (<div></div>)}

          {loginCompContext.token ? (
            <>
              <div>
                <Link className="logout" to="/login" onClick={()=>{logOut(); loginCompContext.setFound(false);}}>
                  logout
                </Link>
              </div>

              <div>
                <AiOutlineShoppingCart size={28} className="cart-icon" onClick={()=>{history("/cart")}}/>
              </div>
            </>
          ) : (
            <div>
              <Link className="login-link" to="/login">
                Hello, Sign in
              </Link>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Header;
