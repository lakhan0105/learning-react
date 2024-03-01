import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

function RootLayout() {
  const { loggedIn, setIsLoggedIn } = useAuthContext();

  return (
    <div>
      <nav>
        <h4 className="logo">logo</h4>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>

          {!loggedIn && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}

          {loggedIn && (
            <li>
              <NavLink to="/login" onClick={() => setIsLoggedIn(false)}>
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <>
        <Outlet></Outlet>
      </>
    </div>
  );
}

export default RootLayout;
