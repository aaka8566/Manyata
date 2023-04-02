import React from "react";
import {
  BsFillShieldLockFill,
  BsTelephoneFill,
  BsFillBookmarkHeartFill,
  BsFillCartFill,
  BsFillStarFill,
  BsPlusLg,
} from "react-icons/bs";
import { useSelector } from "react-redux";

export const CartCard = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div key={product.id}>
        <div className="image-wrapper">
          <div className="rating">
            <BsFillStarFill style={{ color: "lightseagreen" }} />
            {"  "}
            <b>
              &nbsp;
              {product.rating} | {product.rating_Count}
            </b>
          </div>
          <img src={product.image} className="product-image"></img>
        </div>

        <p>{product.brand} </p>
        <p>SubTotal:{product.TotalPriceThisItemInCart}</p>
      </div>
    </div>
  );
};
