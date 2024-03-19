import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

function Navlinks() {
  const { user } = useSelector((state) => state.userState);

  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;

        // hide the checkout and orders if user is not logged in
        if (!user && (url === "checkout" || url === "orders")) return null;

        return (
          <li key={id}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
}

export default Navlinks;
