import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { headerContext } from "../contexts/header";
import { loginContext } from "../contexts/login";
import { FcSearch } from "react-icons/fc";
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
          {/* <div className="header-options"> */}
          <p className="name-website" onClick={click}>
            <b>e-commerce app</b>
          </p>

          <select name="Tses">
            <option>tset</option>
            <option>test</option>
          </select>

          <div className="search">
            <input
              className="search-bar"
              placeholder="Search"
              onChange={(e) => {
                headerCompContext.setSearch(e.target.value);
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

          {/* </div> */}

          {loginCompContext.token ? (
            <>
              <div>
                <Link className="logout" to="/login" onClick={logOut}>
                  logout
                </Link>
              </div>

              <div>
                <AiOutlineShoppingCart size={28} className="cart-icon" />
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
