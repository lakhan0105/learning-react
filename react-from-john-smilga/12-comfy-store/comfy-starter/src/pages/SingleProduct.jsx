import React, { useState } from "react";
import custFetch from "../utils";
import { Link, useLoaderData } from "react-router-dom";

const url = `/products`;

export const loader = async ({ params }) => {
  const resp = await custFetch(`${url}/${params.id}`);
  const singleProduct = resp.data.data;
  return { singleProduct };
};

function SingleProduct() {
  const { singleProduct } = useLoaderData();

  const { image, title, price, description, colors, company } =
    singleProduct.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, SetAmount] = useState(1);

  function handleAmount(e) {
    SetAmount(parseInt(e.target.value));
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-6 h-96 object-cover rounded-lg lg:w-full"
        />

        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">${price / 100}</p>
          <p className="mt-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2  ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setProductColor(color);
                    }}
                  ></button>
                );
              })}
            </div>
          </div>

          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label
              htmlFor="amount"
              className="text-md font-medium tracking-wider capitalize"
            >
              amount
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          {/* CART BTN */}
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => {
                console.log("added to bag");
              }}
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
