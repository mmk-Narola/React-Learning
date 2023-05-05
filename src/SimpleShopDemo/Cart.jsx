import React, { useContext } from "react";
import { CartContext } from "./MainPage";

const Cart = () => {
  const cartItem = useContext(CartContext);
  console.log(cartItem.cartItem);
  return (
    <>
      <h2>Item = {cartItem.cartItem > 0 ? cartItem.cartItem : "Not Item"}</h2>
    </>
  );
};

export default Cart;
