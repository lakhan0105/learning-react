import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="center">
        <img src={img} alt="not found" />
        <h3>cannot find the page you are looking for</h3>
        <Link to="/">Go back Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h3>something went wrong</h3>
    </div>
  );
};

export default Error;
