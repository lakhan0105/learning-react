import React, { useContext } from "react";
import { useGlobalContext } from "../context/Context";

export const TotalsContainer = () => {
  const { cartMap, clearCart, totalCost } = useGlobalContext();
  console.log(cartMap.size);

  return (
    <div className="totals-container">
      <div className="line"></div>
      <div className="totals">
        <p className="totals-text">Total</p>
        <p className="total-price">${totalCost.toFixed(2)}</p>
      </div>

      {/* work later */}
      <button className="clear-cart-btn" onClick={clearCart}>
        {cartMap.size < 1 ? "add items " : "clear cart"}
      </button>
    </div>
  );
};
