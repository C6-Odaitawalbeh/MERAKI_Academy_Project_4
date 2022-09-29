import React, { useContext } from "react";
import axios from "axios";
import { productContext } from "../contexts/main";
import { loginContext } from "../contexts/login";

const Cart = () => {

  const productCompContext = useContext(productContext);
  const loginCompContext = useContext(loginContext);


    const sendToCart = async () => {
        try {
          await axios.post(`http://localhost:5000/cart`,{
            product: productCompContext.productId
          } , {
            headers: {
              Authorization: `Bearer ${loginCompContext.token}`,
            },
          }).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);})
        } catch (err) {
          console.log(err);
          throw err;
        }
      };

      const showCart = async () => {
        try {
          await axios.get(`http://localhost:5000/cart/show`, {
            headers: {
              Authorization: `Bearer ${loginCompContext.token}`,
            },
          }).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);})
        } catch (err) {
          console.log(err);
          throw err;
        }
      };

      const deleteFromCart = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/cart/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${loginCompContext.token}`,
            },
          }).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);})
          } catch (err) {
            console.log('err');
            throw err;
          }
        };

    return (
        <>
        <div></div>
        </>
    )
};

export default Cart;