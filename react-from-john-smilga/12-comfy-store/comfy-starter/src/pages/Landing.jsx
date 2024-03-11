import React from "react";
import { FeaturedProducts, Hero } from "../components";
import axios from "axios";
import custFetch from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const resp = await custFetch(url);
  const products = resp.data.data;
  return { products };
};

function Landing() {
  return (
    <>
      <Hero></Hero>
      <FeaturedProducts />
    </>
  );
}

export default Landing;
