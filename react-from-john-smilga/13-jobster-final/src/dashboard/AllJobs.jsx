import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { JobsContainer, SearchContainer } from "../components/index";

function AllJobs() {
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
}

export default AllJobs;
