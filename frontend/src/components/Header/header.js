import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { headerContext } from "../contexts/header";
import { loginContext } from "../contexts/login";
import {
  FcSearch,
  FcSettings,
  FcEngineering,
  FcShipped,
  FcAutomotive,
} from "react-icons/fc";
import {
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineShopping,
} from "react-icons/ai";
import "./style.css";
import { productContext } from "../contexts/main";
import { MdComputer } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiNestedHearts, GiElectricalResistance } from "react-icons/gi";
import { TbBabyCarriage } from "react-icons/tb";
import { IoManOutline } from "react-icons/io5";

const Header = () => {
  const headerCompContext = useContext(headerContext);
  const loginCompContext = useContext(loginContext);
  const productCompContext = useContext(productContext);
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
    loginCompContext.setProfile(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <div className="web-name-eshop">
            <p className="name-website" onClick={click}>
              <b>
                e <FcShipped size={30} /> shop
              </b>
            </p>
          </div>

          {loginCompContext.adminRole === "633790d637b11ff4da1d53fe" ? (
            <div></div>
          ) : (
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
                size={40}
                className="search-icon"
                onClick={(e) => {
                  headerCompContext.searchProduct();
                }}
              />
            </div>
          )}

          {loginCompContext.adminRole === "633790d637b11ff4da1d53fe" ? (
            <Link className="button-admin" to="/admin/manage">
              Products
              <FcSettings className="setting-icon" size={28} />
              setting
            </Link>
          ) : (
            <div></div>
          )}

          {loginCompContext.adminRole === "633790d637b11ff4da1d53fe" ? (
            <Link className="button-admin" to="/admin/manage/users">
              Users
              <FcEngineering size={28} />
              setting
            </Link>
          ) : (
            <div></div>
          )}

          {loginCompContext.token ? (
            <>
              <div>
                <Link
                  className="logout"
                  to="/login"
                  onClick={() => {
                    logOut();
                    loginCompContext.setFound(false);
                  }}
                >
                  logout
                </Link>
              </div>

              {loginCompContext.adminRole === "633790d637b11ff4da1d53fe" ? (
                <div></div>
              ) : (
                <div>
                  <AiOutlineShoppingCart
                    size={28}
                    className="cart-icon"
                    onClick={() => {
                      history("/cart");
                    }}
                  />
                </div>
              )}
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

      <div className="categories-div-link">
        <Link
          to="/products/categories/appliances"
          className="categories-links"
          onClick={() => productCompContext.filterByCategories("Appliances")}
        >
          <CgSmartHomeWashMachine size={20} className="icons-react" />{" "}
          Appliances
        </Link>
        <Link
          to="/products/categories/apps&games"
          className="categories-links"
          onClick={() =>
            productCompContext.filterByCategories("Apps" || "Games")
          }
        >
          <AiOutlineAppstore size={20} className="icons-react" /> Apps & Games
        </Link>
        <Link
          to="/products/categories/arts&crafts&sewing"
          className="categories-links"
          onClick={() =>
            productCompContext.filterByCategories(
              "Arts" || "Crafts" || "Sewing"
            )
          }
        >
          <GiNestedHearts size={20} className="icons-react" /> Arts & Crafts
        </Link>
        <Link
          to="/products/categories/automotiveParts&accessories"
          className="categories-links"
          onClick={() =>
            productCompContext.filterByCategories(
              "AutomotiveParts" || "Accessories"
            )
          }
        >
          <FcAutomotive size={20} className="icons-react" /> Automotive Parts
        </Link>
        <Link
          to="/products/categories/baby"
          className="categories-links"
          onClick={() => productCompContext.filterByCategories("Baby")}
        >
          <TbBabyCarriage size={20} className="icons-react" /> Baby
        </Link>
        <Link
          to="/products/categories/beauty&personalcare"
          className="categories-links"
          onClick={() =>
            productCompContext.filterByCategories(
              "Beauty" || "Personal" || "Care"
            )
          }
        >
          <IoManOutline size={20} className="icons-react" /> Beauty & Personal
          Care
        </Link>
        <Link
          to="/products/categories/clothing&shoes&jewelry"
          className="categories-links"
          onClick={() =>
            productCompContext.filterByCategories(
              "Clothing" || "Shoes" || "Jewelry"
            )
          }
        >
          <AiOutlineShopping size={20} className="icons-react" /> Clothing,
          Shoes and Jewelry
        </Link>
        <Link
          to="/products/categories/computers"
          className="categories-links"
          onClick={() => productCompContext.filterByCategories("Computers")}
        >
          <MdComputer size={20} className="icons-react" /> Computers
        </Link>
        <Link
          to="/products/categories/electronics"
          className="categories-links"
          onClick={() => {
            productCompContext.filterByCategories("Electronics");
            history("/products/categories/electronics");
          }}
        >
          <GiElectricalResistance size={20} className="icons-react" />{" "}
          Electronics
        </Link>
      </div>
    </>
  );
};

export default Header;
