import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import custFetch from "../utils";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) redirect("/login");

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const resp = await custFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: resp.data.data, meta: resp.data.meta };
    } catch (error) {}
    const errorMessage =
      error?.response?.data?.error?.message ||
      "there was an error while placing your order!";
    alert(errorMessage);

    if (error.response.status === 401 || 403) {
      return redirect("/login");
    }

    return null;
  };

function Orders() {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order!" />;
  }

  return (
    <>
      <SectionTitle text={"Your Orders"} />
      <OrdersList />
      <PaginationContainer />
    </>
  );
}

export default Orders;
