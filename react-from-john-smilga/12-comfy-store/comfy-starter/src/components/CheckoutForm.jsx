import React from "react";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import custFetch from "../utils";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: `$${orderTotal / 100}`,
      cartItems,
      numItemsInCart,
    };

    try {
      const resp = await custFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      store.dispatch(clearCart());
      alert("order placed successfully!");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error while placing your order!";
      alert(errorMessage);

      if (error.response.status === 401 || 403) {
        return redirect("/login");
      }
      return null;
    }
  };

function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Shipping information</h4>
      <FormInput label={"first name"} name={"name"} type={"text"} />
      <FormInput label={"Address"} name={"address"} type={"text"} />
      <SubmitBtn text={"place your order"} />
    </Form>
  );
}

export default CheckoutForm;
