import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = useContext();

const ProductItem = (props) => {

    const [product, setProduct] = useState([]);

    const history = useNavigate();

    const showMyProduct = async () => {
        try {
            await axios.get(``)
        } catch (error) {
            
        }
    }
}