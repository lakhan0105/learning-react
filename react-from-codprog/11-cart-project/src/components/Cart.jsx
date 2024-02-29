import React from "react";
import { useCartContext } from "../context/CartProvider";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return <h1>No Items in the cart...</h1>;
  }

  // calculate totals
  // let total = 0;
  // for (let item of cart) {
  //   total += item.price * item.count;
  // }

  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.count;
  }, 0);

  return (
    <>
      <div className="cart">
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem}></CartItem>;
        })}
      </div>

      <h3>Total Price:₹{totalAmount} </h3>
    </>
  );
}

export default Cart;
