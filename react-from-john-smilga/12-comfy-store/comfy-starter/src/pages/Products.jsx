import React from "react";
import { Filters, ProductsContainer, PaginationContainer } from "../components";
import custFetch from "../utils";
import { useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async ({ request }) => {
  const resp = await custFetch(url);

  return { products: resp.data.data, meta: resp.data.meta };
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
