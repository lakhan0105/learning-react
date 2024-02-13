import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";

export const Header = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <header className="page-header">
      <nav className="nav-center center">
        <h1 className="logo">UseReducer</h1>
        <button className="cart-btn">
          <FaShoppingCart />
          <span>{totalAmount}</span>
        </button>
      </nav>
    </header>
  );
};
