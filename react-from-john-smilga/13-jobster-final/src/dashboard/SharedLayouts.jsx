import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SmallSidebar, BigSidebar } from "../components/index";
import Wrapper from "../assets/wrappers/SharedLayout";

function SharedLayouts() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />

        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayouts;
