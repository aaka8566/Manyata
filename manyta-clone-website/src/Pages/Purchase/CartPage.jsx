import React from "react";
import { CartCard } from "./../../Components/ProductPageComponets/CartCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar";

export const CartPage = () => {
  const state = useSelector((state) => state.CartReducer);

  console.log(state);
  const [local, setLocal] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || null;
    // console.log(cart);
    setLocal(cart);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Cart</h1>
      {local.length > 0 &&
        local.map((el) => {
          return <CartCard product={el} key={el.id} />;
        })}
    </div>
  );
};
