import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../contexts/login";
import { productContext } from "../contexts/main";
import "./style.css";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcLike, FcFilledFilter } from "react-icons/fc";
import { TbHandClick } from "react-icons/tb";
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
    </>
  );
};

export default Main;
