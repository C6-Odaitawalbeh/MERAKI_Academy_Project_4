import React, { useContext } from "react";
import { orderContext } from "../contexts/order";
import "./style.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const orderCompContext = useContext(orderContext);
  const stripe = useStripe();
  const element = useElements();

  return (
    <>
      <div className="user-detailes">
        <h5>{orderCompContext.fullName}</h5>
        <p>{orderCompContext.phoneNumber}</p>
        <p>{orderCompContext.address}</p>
        <p>{orderCompContext.country}</p>
      </div>
      <div className="total-pricee">{orderCompContext.totalPrice} $ Total</div>
      <hr></hr>
      <div className="total-pricee">PAYMENT METHOD</div>
      <hr></hr>
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
              fontSize: "20px",
            },
            invalid: {
              color: "red",
            },
          },
        }}
      />
    </>
  );
};

export default Payment;
