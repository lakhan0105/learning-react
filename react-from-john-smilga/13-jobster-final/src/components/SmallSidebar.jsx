import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";

function SmallSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  // toggle
  function toggle() {
    dispatch(toggleSidebar());
  }

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SmallSidebar;
