import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../contexts/login";
import { productContext } from "../contexts/main";
import "./style.css";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcLike, FcFilledFilter, FcShipped } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import axios from "axios";

const Main = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);
  const history = useNavigate();

  const [priceFilterFrom, setPriceFilterFrom] = useState(0);
  const [priceFilterTo, setPriceFilterTo] = useState(0);

  useEffect(
    () => {
      productCompContext.showMyProduct();
    },
    [
      /*productCompContext.pageNumber*/
    ]
  );

  const productMoreDetailes = async (id) => {
    productCompContext.setProductId(id);
  };

  const handlePageClick = (data) => {
    productCompContext.showMyProduct(data.selected + 1);
  };

  const detailes = (product) => {
    productCompContext.setProductIdDetailes(product);
    history("/product/detailes");
  };

  const pageCount = 10;

  const getProductsByPrice = () => {
    axios
      .get(
        `http://localhost:5000/products/search_2?asc=${priceFilterFrom}&&desc=${priceFilterTo}`
      )
      .then((result) => {
        productCompContext.setProductFilterByPrice(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsByPrice();
  }, []);

  return (
    <>
      <div className="conteainer-main-page">
        <div className="main-page">
          {productCompContext.product.map((item, index) => {
            return (
              <div
                className="products"
                key={index}
                onClick={() => {
                  productMoreDetailes(item._id);
                }}
              >
                <div className="image-div">
                  <img
                    className="product-image"
                    src={item.image}
                    onClick={(e) => {
                      productCompContext.setProductIdDetailes(item);
                      history("/product/detailes");
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="filter-div">
          <h5 className="filter-text">
            <FcFilledFilter size={25} /> Filter Products By Price
          </h5>
          <hr></hr>
          <Link to="/products/filter_1" className="filter-link">
            From the cheapest to most expensive <TbHandClick />
          </Link>
          <Link to="/products/filter_2" className="filter-link">
            From the most expensive to the cheapest <TbHandClick />
          </Link>
          <hr></hr>
          <div className="filter-product-price-from-to">
            <input
              className="filter-input"
              type="number"
              placeholder="from $"
              onChange={(e) => {
                setPriceFilterFrom(e.target.value);
              }}
            ></input>
            <input
              className="filter-input"
              type="number"
              placeholder="to $"
              onChange={(e) => {
                setPriceFilterTo(e.target.value);
              }}
            ></input>
            <button
              className="filter-button"
              onClick={() => {
                getProductsByPrice();
                history("/products/search_1");
              }}
            >
              Go
            </button>
          </div>
          <hr></hr>
          <h5 className="filter-text">
            <FcFilledFilter size={25} /> Filter Products By Categories
          </h5>
          <hr></hr>
          <Link to="" className="filter-link">
            Appliances
          </Link>
          <Link to="" className="filter-link">
            Apps & Games
          </Link>
          <Link to="" className="filter-link">
            Arts, Crafts, & Sewing
          </Link>
          <Link to="" className="filter-link">
            Automotive Parts & Accessories
          </Link>
          <Link to="" className="filter-link">
            Baby
          </Link>
          <Link to="" className="filter-link">
            Beauty & Personal Care
          </Link>
          <Link to="" className="filter-link">
            Clothing, Shoes and Jewelry
          </Link>
          <Link to="" className="filter-link">
            Computers
          </Link>
          <Link to="" className="filter-link">
            Electronics
          </Link>
        </div>
      </div>
      <div className="pagin">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< back"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      </div>

      <footer className="footer">

        <div className="div1">
        <div className="left-area">
          <h2>Content</h2>
          <ul className="box">
            <li>e.shop.support@gmail.com</li>
            <li>+189-8469-1898</li>
            <li>Amman, JORDAN</li>
            <li>www.eshop.com</li>
            <li>9989</li>
          </ul>
        </div>
        </div>

        <div className="div2-grid">
        <ul className="reigth-area">
          <div>
            <li className="link-area">
            <h2>Useful Link</h2>
            <ul className="box h-box">
            <li><Link to="#">Home</Link></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Policy</a></li>
            <li><a href="#">Terms</a></li>
            </ul>
            </li>
          </div>

          <div>
            <li>
            <h2>Recent Post</h2>
            <ul className="box">
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Lorem</a></li>
            </ul>
            </li>
          </div>
        </ul>
        </div>
        <div>
            <h2>Newletter</h2>
            <form action="" className="form-search">
              <div className="search-box">
                <input type="text" name="" id=""></input>
                <button className="btnn" type="submit">search</button>
              </div>
            </form>
            
            <div className="socials">
              <a href="#"><i className="fa fa-facebook"><FaFacebookF /></i></a>
              <a href="#"><i className="fa fa-instagram"><FaInstagram /></i></a>
              <a href="#"><i className="fa fa-twitter"><BsTwitter /></i></a>
              <a href="#"><i className="fa fa-youtube"><ImYoutube /></i></a>
            </div>
        
          </div>
        <div className="footer-buttom">
          <h2 className="web">e <FcShipped size={50} /> shop</h2>
          <p>All Right reversed by &copy;creativo 2022</p>
        </div>
      </footer>
      
    </>
  );
};

export default Main;
