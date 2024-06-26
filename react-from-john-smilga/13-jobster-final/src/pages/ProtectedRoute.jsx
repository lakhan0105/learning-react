import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useSelector((store) => store.userState);

  if (!user) {
    return <Navigate to={"/landing"} />;
  }

  return children;
}

export default ProtectedRoute;
