import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container"
            : "sidebar-container  show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
