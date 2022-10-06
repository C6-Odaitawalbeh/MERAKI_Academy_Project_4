import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../contexts/login";
import { productContext } from "../contexts/main";
import "./style.css";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcFilledFilter, FcShipped, FcAutomotive } from "react-icons/fc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbSortAscending2, TbSortDescending2 } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import axios from "axios";
import { MdComputer } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiNestedHearts, GiElectricalResistance } from "react-icons/gi";
import { TbBabyCarriage } from "react-icons/tb";
import { IoManOutline } from "react-icons/io5";
import { AiOutlineAppstore, AiOutlineShopping } from "react-icons/ai";
import Help from "./helpAndCustomerService";

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
        // console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    getProductsByPrice();
  }, []);

  useEffect(() => {
    productCompContext.filterByCategories();
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="conteainer-main-page">
        <div className="filter-div">
          <h5 className="filter-text">
            <FcFilledFilter size={25} /> Filter Products By Price
          </h5>
          <hr></hr>

          <Link to="/products/filter_1" className="filter-link">
            <TbSortAscending2 className="icons-react" size={20} /> From the
            cheapest to most expensive
          </Link>
          <Link to="/products/filter_2" className="filter-link">
            <TbSortDescending2 className="icons-react" size={20} />
            From the most expensive to the cheapest
          </Link>
          <hr></hr>
          <div className="filter-product-price-from-to">
            <input
              className="filter-input"
              type="number"
              placeholder="From"
              onChange={(e) => {
                setPriceFilterFrom(e.target.value);
              }}
            ></input>
            <input
              className="filter-input"
              type="number"
              placeholder="To"
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
              Search
            </button>
          </div>
          <hr></hr>
          <h5 className="filter-text">
            <FcFilledFilter size={25} className="icons-react" /> Filter Products
            By Categories
          </h5>
          <hr></hr>

          <Link
            to="/products/categories/appliances"
            className="filter-link"
            onClick={() => productCompContext.filterByCategories("Appliances")}
          >
            <CgSmartHomeWashMachine size={20} className="icons-react" />{" "}
            Appliances
          </Link>

          <Link
            to="/products/categories/apps&games"
            className="filter-link"
            onClick={() =>
              productCompContext.filterByCategories("Apps" || "Games")
            }
          >
            <AiOutlineAppstore size={20} className="icons-react" /> Apps & Games
          </Link>

          <Link
            to="/products/categories/arts&crafts&sewing"
            className="filter-link"
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
            className="filter-link"
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
            className="filter-link"
            onClick={() => productCompContext.filterByCategories("Baby")}
          >
            <TbBabyCarriage size={20} className="icons-react" /> Baby
          </Link>

          <Link
            to="/products/categories/beauty&personalcare"
            className="filter-link"
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
            className="filter-link"
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
            className="filter-link"
            onClick={() => productCompContext.filterByCategories("Computers")}
          >
            <MdComputer size={20} className="icons-react" /> Computers
          </Link>

          <Link
            to="/products/categories/electronics"
            className="filter-link"
            onClick={() => productCompContext.filterByCategories("Electronics")}
          >
            <GiElectricalResistance size={20} className="icons-react" />{" "}
            Electronics
          </Link>
        </div>

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
                    className="product-imagee"
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

      <hr></hr>

      <div className="brand-container">
        <div className="brand-div1">
          <img
            className="image-brand"
            src="https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg"
          />
          <img
            className="image-brand"
            src="https://www.pngall.com/wp-content/uploads/2016/06/Adidas-Logo-PNG-Clipart.png"
          />
          <img
            className="image-brand"
            src="https://media.designrush.com/inspiration_images/137383/conversions/_1531333191_865_Lacoste-Minimal-Logo-Design_fb009c5034c3-mobile.jpg"
          />
          <img
            className="image-brand"
            src="https://png.pngtree.com/element_our/png/20181226/logo-luxury-royal-brand-png_280333.jpg"
          />
          <img
            className="image-brand"
            src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/151/posts/33040/image/simplicity-in-logo.jpg"
          />
          <img
            className="image-brand"
            src="https://digistatement.com/wp-content/uploads/2021/03/lg-logo_480x480.png"
          />
          <img
            className="image-brand"
            src="https://vectorseek.com/wp-content/uploads/2021/01/Samsung-Logo-Vector-scaled.jpg"
          />
          <img
            className="image-brand"
            src="https://www.logotypes101.com/logos/888/5726E52D596337BED03EF02F68D6EEB1/Armani_Jeans.png"
          />
        </div>
        <div className="brand-div2">
          <img
            className="image-brand"
            src="https://miro.medium.com/max/1400/0*LjMrbWyfeQTQPn-a.png"
          />
          <img
            className="image-brand"
            src="https://thumbs.dreamstime.com/b/image-describes-chanel-brand-logo-background-two-intersected-c-letters-gold-metal-effect-under-font-177005943.jpg"
          />
          <img
            className="image-brand"
            src="https://blog.logomyway.com/wp-content/uploads/2016/12/gucci-logo-gold.jpg"
          />
          <img
            className="image-brand"
            src="https://www.clickedstudios.com/wp-content/uploads/2019/02/louis-vuitton-logo.png"
          />
          <img
            className="image-brand"
            src="https://1000logos.net/wp-content/uploads/2021/05/Mango-logo.png"
          />
          <img
            className="image-brand"
            src="https://www.designhill.com/design-blog/wp-content/uploads/2019/04/5.png"
          />
          <img
            className="image-brand"
            src="https://logo-download.com/wp-content/data/images/svg/Fila,-Inc.-logo.svg"
          />
          <img
            className="image-brand"
            src="https://i.pinimg.com/736x/6d/2c/cd/6d2ccd795e409bb68eec5db364e797ef.jpg"
          />
        </div>
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
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                </ul>
              </li>
            </div>

            <div>
              <li className="conditons_footer">
                <h3>Conditions of Use</h3>
                <ul className="box">
                  <li className="li">
                    <p onClick={()=>{history("eshop/help")}}> Help & Customer Service </p>
                  </li>
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
              <button className="btnn" type="submit">
                search
              </button>
            </div>
          </form>

          <div className="socials">
            <a href="#">
              <i className="fa fa-facebook">
                <FaFacebookF />
              </i>
            </a>
            <a href="#">
              <i className="fa fa-instagram">
                <FaInstagram />
              </i>
            </a>
            <a href="#">
              <i className="fa fa-twitter">
                <BsTwitter />
              </i>
            </a>
            <a href="#">
              <i className="fa fa-youtube">
                <ImYoutube />
              </i>
            </a>
          </div>
        </div>
        <div className="footer-buttom">
          <h2 className="web">
            e <FcShipped size={50} /> shop
          </h2>
          <p>All Right reversed by &copy;creativo 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Main;
