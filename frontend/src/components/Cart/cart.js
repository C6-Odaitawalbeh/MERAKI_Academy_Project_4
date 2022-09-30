import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { productContext } from "../contexts/main";
import { loginContext } from "../contexts/login";
import { TiDelete } from "react-icons/ti";


const Cart = () => {
  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);

  const [productElem, setProductElem] = useState([]);
    console.log(productElem);


  //   const showCart = async () => {
  //     try {
  //       await axios
  //         .get(`http://localhost:5000/cart/show`, {
  //           headers: {
  //             Authorization: `Bearer ${loginCompContext.token}`,
  //           },
  //         })
  //         .then((res) => {
  //         //   console.log(res.data);
  //         //   console.log(res.data[0].product);
  //           setProductElem([...productElem, ...res.data])
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } catch (err) {
  //       console.log(err);
  //       throw err;
  //     }
  //   };

  useEffect(() => {
    axios.get("http://localhost:5000/cart/show", {
      headers: {
        Authorization: `Bearer ${loginCompContext.token}`,
      },
    })
    .then((result)=>{
        // console.log(result.data);
        // setProductElem([...productElem, ...result.data]);
        setProductElem(result.data)
    })
    .catch((err)=>{
        console.log(err);
    })
  },[]);

//   showCart();

  const deleteFromCart = async (id) => {
    try {
      await axios
        .delete(`http://localhost:5000/cart/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${loginCompContext.token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("err");
      throw err;
    }
  };

 

  return (
    <>
      <div>
        {productElem.map((item, index) => {
            console.log(item);
            console.log(item.product);
            console.log(item.product.title);
          return (
            <div key={index}>
                <TiDelete size={30} />
                <div className="image-div">
                    <img className="product-image" src={item.product.image} />
                </div>
                
                <div className="words">
                <h2 className="title">{item.product.title}</h2>
                <h4 className="description">Description:</h4>
                <p>{item.product.shortDescription}</p>
                <h4 className="shortDiscription">Short Description:</h4>
                <p>{item.product.shortDescription}</p>
                <h4 className="date">Date:</h4>
                <p>{item.product.date}</p>
                <h4 className="location">Located:</h4>
                <p>{item.product.location}</p>
                <p className="price">Price: {item.product.price}</p>
                <p>Quantity of products available: {item.product.quantity}</p>
                <select name="Number of pieces">
                    <option>Number of pieces</option>
                    <option>One piece</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </select>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
