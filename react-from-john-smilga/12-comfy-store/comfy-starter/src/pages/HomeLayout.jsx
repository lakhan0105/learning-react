import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

function HomeLayout() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <section className="center-layout">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
