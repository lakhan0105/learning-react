import React from "react";
import { useCartContext } from "../context/CartProvider";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function CartItem({ id, price, img, title, amount, count }) {
  const { handleIncrease, handleDecrease, handleDelete } = useCartContext();

  return (
    <div className="cart-item">
      <div className="cart-img-container">
        <img src={img} alt={title} />
      </div>

      <div className="cart-item-info">
        <p className="cart-item-title">{title}</p>
        <p className="cart-item-price">₹{price}</p>
        <p className="count">{count}</p>
      </div>

      <div className="btns-container">
        <button
          className="cart-item-btn"
          onClick={() => {
            handleIncrease(id);
          }}
        >
          <FaAngleUp />
        </button>

        <button
          className="cart-item-btn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <FaTrash />
        </button>

        <button
          className="cart-item-btn"
          onClick={() => {
            handleDecrease(id);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
