import React, { createContext, useState } from "react";

export const orderContext = createContext();

const OrderProvider = (props) => {
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [statee, setStatee] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);
//   console.log(`Total Price ${totalPrice}`);
//   console.log(`Count: ${count}`);

  const state = {
    fullName,
    setFullName,
    country,
    setCountry,
    phoneNumber,
    setPhoneNumber,
    city,
    setCity,
    address,
    setAddress,
    statee,
    setStatee,
    zipCode,
    setZipCode,
    totalPrice,
    setTotalPrice,
    count,
    setCount,
  };

  return (
    <orderContext.Provider value={state}>
      {props.children}
    </orderContext.Provider>
  );
};

export default OrderProvider;
