import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../contexts/login";
import { productContext } from "../contexts/main";
import "./style.css";
// import { FcDeleteDatabase } from "react-icons/fc";
// import { AiFillEdit } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcLike } from "react-icons/fc";

const Main = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);
  const history = useNavigate();

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

  const sendToCart = (id) => {
    axios
      .post(
        `http://localhost:5000/cart`,
        {
          product: id,
        },
        {
          headers: {
            Authorization: `Bearer ${loginCompContext.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.product);
        productCompContext.setProductItemId(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageClick = (data) => {
    productCompContext.showMyProduct(data.selected + 1);
  };

  const detailes = (product) => {
    productCompContext.setProductIdDetailes(product);
    history("/product/detailes");
  };

  const pageCount = 10;

  return (
    <>
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

              <div className="words">
                <FcLike
                  className="addToCart"
                  size={30}
                  id={item._id}
                  onClick={() => {
                    sendToCart(item._id);
                    productCompContext.setButtonAddToCart(false);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* <div>
        <button onClick={()=>{productCompContext.setPageNumber(productCompContext.pageNumber+1)}}>More</button>
        <button onClick={()=>{productCompContext.setPageNumber(productCompContext.pageNumber-1)}}>Less</button>
      </div> */}

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
