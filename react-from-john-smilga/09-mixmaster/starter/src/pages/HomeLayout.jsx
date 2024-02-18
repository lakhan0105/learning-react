import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar></Navbar>
      <section className="center">
        {isPageLoading ? <h2>Loading...</h2> : <Outlet></Outlet>}
      </section>
    </div>
  );
};

export default HomeLayout;
