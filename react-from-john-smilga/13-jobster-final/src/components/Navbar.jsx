import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { logoutUser, toggleSidebar } from "../features/user/userSlice";

function Navbar() {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  // handleToggleSidebar
  function handleToggleSidebar() {
    dispatch(toggleSidebar());
  }

  // handleLogoutUser
  function handleLogoutUser() {
    dispatch(logoutUser("Logging out..."));
  }

  return (
    <Wrapper>
      <div className="nav-center">
        {/* TOGGLE SIDEBAR */}
        <button
          type="button"
          className="toggle-btn"
          onClick={handleToggleSidebar}
        >
          <FaAlignLeft />
        </button>

        {/* LOGO */}
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setShowLogout((prev) => !prev);
            }}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>

          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={handleLogoutUser}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
