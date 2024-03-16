import React from "react";
import { Filters, ProductsContainer, PaginationContainer } from "../components";
import custFetch from "../utils";
import { useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async ({ request }) => {
  // manual approach
  // const params = new URL(request.url).searchParams;
  // const search = params.get("search");

  // easier approach
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const resp = await custFetch(url, { params });
  return { products: resp.data.data, meta: resp.data.meta, params };
};

function Products() {
  const { products } = useLoaderData();

  return (
    <>
      <Filters></Filters>
      <ProductsContainer></ProductsContainer>
      <PaginationContainer></PaginationContainer>
    </>
  );
}

export default Products;
