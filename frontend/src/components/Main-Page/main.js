import axios from "axios";
import React, { useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../contexts/login";
import { productContext } from "../contexts/main";
import "./style.css";
// import { FcDeleteDatabase } from "react-icons/fc";
// import { AiFillEdit } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);
  const history = useNavigate();

  useEffect(() => {
    productCompContext.showMyProduct();
  }, [/*productCompContext.pageNumber*/]);

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
    //page Number on click button pagination
    // console.log(data.selected+1);
    productCompContext.showMyProduct(data.selected+1)
  };

  const pageCount = 10;

  return (
    <>
      <div className="main-page">
        {productCompContext.product.map((item, index) => {
          return (
            <div
              className="product"
              key={index}
              onClick={() => {
                productMoreDetailes(item._id);
              }}
            >
              <div className="image-div">
                <img className="product-image" src={item.image} />
              </div>

              <div className="words">
                <p className="title">{item.title}</p>
                {/* <p className="price">{item.shortDescription}</p> */}

                  <button
                  className="addToCart"
                    id={item._id}
                    onClick={() => {
                      sendToCart(item._id);
                      productCompContext.setButtonAddToCart(false);
                    }}
                  >
                    Add To Cart
                  </button>

                {/* 
              {loginCompContext.adminRole == "6331e15b77850e5ab71f0d4d" ? ( 
              <>
              <div>
                {admin && <FcDeleteDatabase size={28} />}
                {admin && <AiFillEdit size={28}  onClick={(e)=>{history('/edit/prduct'); productCompContext.setEditState(item._id)}}/>}
              </div>
              </>
              ) : (
                <>
                </>
              )
              } */}

                {/* {loginCompContext.adminRole == "6331e15b77850e5ab71f0d4d" ? ( loginCompContext.found && <div>
                {admin && <FcDeleteDatabase size={28} />}
                {/* <Link to="/edit/prduct" onClick={(e)=>{productCompContext.setEditState(item._id)}}>Edit Product</Link> */}
                {/* { admin && <AiFillEdit size={28}  onClick={(e)=>{history('/edit/prduct'); productCompContext.setEditState(item._id)}}/>} */}
                {/* </div>) : <div></div>} */}
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
