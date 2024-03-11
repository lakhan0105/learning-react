import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./context/AuthProvider";

function ReqAuth({ children }) {
  const { loggedIn, setLoggedIn } = useAuthContext();
  const { pathname } = useLocation();

  if (loggedIn) {
    return children;
  }

  return (
    <Navigate
      to={"/login"}
      replace={true}
      state={{ prevPath: pathname }}
    ></Navigate>
  );
}

export default ReqAuth;
