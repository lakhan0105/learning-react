import React from "react";
import { CartItems } from "./CartItems";
import { TotalsContainer } from "./TotalsContainer";

export const Cart = () => {
  return (
    <section className="cart-section">
      <div className="cart center">
        <h1 className="cart-title">your bag</h1>
        <CartItems></CartItems>
        <TotalsContainer></TotalsContainer>
      </div>
    </section>
  );
};
