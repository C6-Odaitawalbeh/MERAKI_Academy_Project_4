import React, { useContext } from "react";
import { productContext } from "../contexts/main";
import { FcLike, FcUndo } from "react-icons/fc";


const ProductDetailes = () => {
  const productCompContext = useContext(productContext);

  return (
    <>
    <div><FcUndo size={30}/></div>
    <div>

        <div>
        <img src={productCompContext.productIdDetailes.image}/>
        </div>

        <div>
            <h3>{productCompContext.productIdDetailes.title}</h3>
            <p>{productCompContext.productIdDetailes.description}</p>
            <p>{productCompContext.productIdDetailes.shortDescription}</p>
            <p>{productCompContext.productIdDetailes.location}</p>
            <p>{productCompContext.productIdDetailes.quantity}</p>
            <p>{productCompContext.productIdDetailes.price}</p>
        </div>

        <div>
            <FcLike />
        </div>

    </div>
    </>
  );
};

export default ProductDetailes;
