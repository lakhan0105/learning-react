import React from "react";
import products from "../products";
import Product from "./Product";
import { useCartContext } from "../context/CartProvider";

function Products() {
  const value = useCartContext();


  return (
    <div className="products-container">
      {products.map((product) => {
        return <Product key={product.id} {...product}></Product>;
      })}
    </div>
  );
}

export default Products;
