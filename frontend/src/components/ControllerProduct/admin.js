import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../contexts/login";
import { FcDeleteDatabase } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { productContext } from "../contexts/main";

const Controller = () => {

  const loginCompContext = useContext(loginContext);
  const productCompContext = useContext(productContext);
  const [getproduct, setGetProduct] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/products", {
        headers: {
          Authorization: `Bearer ${loginCompContext.token}`,
        },
      })
      .then((result) => {
        console.log(result.data);
        setGetProduct(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/products/manage/${id}`,{
            headers: {
              Authorization: `Bearer ${loginCompContext.token}`,
            },
          }).then((result)=>{
            const productAfterDelete = getproduct.filter((elem)=>{
                return elem._id !== id;
            });
            setGetProduct(productAfterDelete);
          })
    } catch (err) {
        console.log(err);
        throw err;
    };
  };

  return (
    <>
      <div className="create-new-product"><Link className="create-product" to="/admin/manage/create"><b>CREATE NEW PRODUCTS</b></Link></div>
      <div>
        {getproduct.map((item, index) => {
          return (
            <div className="container" key={index}>
              <table>
                <tr>
                    <th>IMAGE</th>
                    <th>TITLE PRODUCT</th>
                    <th>DESCRIPTION</th>
                    <th>SHORT DESCRIPTION</th>
                    <th>QUANTITY</th>
                    <th>LOCATED</th>
                    <th>PRICE</th>
                    <th>DELETE</th>
                    <th>EDIT</th>
                </tr>
                <tr>
                    <td><img className="image-product" src={item.image}/></td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.shortdescription}</td>
                    <td>{item.quantity}</td>
                    <td>{item.location}</td>
                    <td>{item.price}</td>
                    <td><FcDeleteDatabase className="icon-delete" onClick={()=>deleteProduct(item._id)} size={28}/></td>
                    <td><AiFillEdit size={28} onClick={()=>{history('/edit/prduct'); productCompContext.setIdProductEdit(item._id)}} /></td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Controller;
