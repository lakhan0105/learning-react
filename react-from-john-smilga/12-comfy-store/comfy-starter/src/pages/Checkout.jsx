import React from "react";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

// resrtict the checkout page if the user did not login
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    alert("please login to visit the checkout page");
    return redirect("/login");
  }
  return null;
};

function Checkout() {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text={"place your order"} />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
