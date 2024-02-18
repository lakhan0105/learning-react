import React, { useState, createContext, useContext } from "react";
import { NavLinks } from "./NavLinks";

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: "Lakhan" });

  function logout() {
    setUser(null);
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <NavLinks></NavLinks>
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
