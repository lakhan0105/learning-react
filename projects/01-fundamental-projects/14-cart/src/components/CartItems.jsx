import React, { useReducer } from "react";
import cartItems from "../Data";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";

export const CartItems = () => {
  const { cartMap, dispatch, removeItem, increaseItem, decreaseItem } =
    useGlobalContext();

  // reducer(state, action);
  const cartArray = Array.from(cartMap.entries());

  return (
    <div className="cart-items">
      {cartArray.map((cartItem) => {
        // Destructuring
        const [id, item] = cartItem;
        const { img, title, price, amount } = item;

        return (
          <article className="cart-item" key={id}>
            <div className="item-img-container">
              <img className="item-img" src={img} alt={`${title} not found`} />
            </div>

            <div className="item-info-container">
              <h3 className="item-name">{title}</h3>
              <span className="item-price">${price}</span>
              <button
                className="remove-item-btn"
                onClick={() => {
                  removeItem(id);
                }}
              >
                remove
              </button>
            </div>

            <div className="amount-container">
              <button
                className="increase-btn amount-btn"
                onClick={() => {
                  increaseItem(id);
                }}
              >
                <FaAngleUp />
              </button>
              <span className="amount">{amount}</span>
              <button
                className="decrease-btn amount-btn"
                onClick={() => {
                  decreaseItem(id);
                }}
              >
                <FaAngleDown />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
