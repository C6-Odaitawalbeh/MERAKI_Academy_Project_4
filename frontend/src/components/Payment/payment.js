import React, { useContext } from "react";
import { orderContext } from "../contexts/order";
import "./style.css";

const Payment = () => {

    const orderCompContext = useContext(orderContext);

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

        </>
    );
};

export default Payment;