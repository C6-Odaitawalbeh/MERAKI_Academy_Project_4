import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {

    const history = useNavigate();
    
    return (
        <>
        <div>
            <p>E-Commerce App</p>
            <select>
                <option>Filter</option>
                <option>descending</option>
            </select>
        </div>
        </>
    )
}