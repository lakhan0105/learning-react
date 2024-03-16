import React from "react";
import { useSelector } from "react-redux";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">${cartTotal / 100}</span>
        </p>

        {/* SHIPPING */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">${shipping / 100}</span>
        </p>

        {/* TAX */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>tax</span>
          <span className="font-medium">${(tax / 100).toFixed(2)}</span>
        </p>

        {/* ORDERTOTAL */}
        <p className="flex justify-between text-sm mt-4  pb-2">
          <span>Order Total</span>
          <span className="font-medium">${(orderTotal / 100).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default CartTotals;
