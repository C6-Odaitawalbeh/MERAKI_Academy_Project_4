import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineBank } from "react-icons/ai";
import { BsPiggyBank } from "react-icons/bs";
import { FcLeft, FcHome } from "react-icons/fc";
import "./style.css";

const SelectPayMethod = () => {
  const history = useNavigate();
  return (
    <>
      <div className="back_to_home">
        <div className="home">
          <FcHome
            size={35}
            onClick={() => {
              history("/");
            }}
          />
        </div>
        <div className="back">
          <FcLeft
            className="back-icon-react"
            size={30}
            onClick={() => {
              history(-1);
            }}
          />
          <p className="back-string">Back</p>
        </div>
      </div>
      <div className="select_pay_method">
        <div>
          <h3>Select a shipping method</h3>
        </div>

        <div className="pay_method">
          <input
            type="radio"
            checked="true"
            onClick={() => {
              history("/cart/recieving");
            }}
          />
          <h5 className="paiement_when_recieving">
            Paiement when recieving{" "}
            <BsPiggyBank size={28} className="icons-react" />
          </h5>
        </div>

        <div className="pay_method">
          <input
            type="radio"
            checked="true"
            onClick={() => {
              history("/cart/by");
            }}
          />
          <h5 className="pay_by_bank_card">
            Pay by bank card <AiOutlineBank size={28} className="icons-react" />
          </h5>
        </div>
      </div>
    </>
  );
};

export default SelectPayMethod;
