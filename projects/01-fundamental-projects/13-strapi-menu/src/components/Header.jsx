import { FaBars, FaX } from "react-icons/fa6";
import React from "react";
import { useGlobalContext } from "../context/Context";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  const { handleSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-page-link")) {
      // hide submenu
      setPageId(null);
    } else {
      // show submenu
    }
  };

  return (
    <header className="page-header" onMouseOver={handleSubmenu}>
      <h1 className="logo">strapi</h1>
      <NavLinks></NavLinks>

      <button className="hamburger-btn" onClick={handleSidebar}>
        <FaBars></FaBars>
      </button>
    </header>
  );
};
