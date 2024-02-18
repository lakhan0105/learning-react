import React from "react";
import { UserCont } from "./UserCont";

export const NavLinks = () => {
  return (
    <div className="nav-contianer">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserCont></UserCont>
    </div>
  );
};
