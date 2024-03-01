import React from "react";
import { useAuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { setLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const previousPath = location.state?.prevPath || "/";

  function handleLogin() {
    setLoggedIn(true);
    navigate(previousPath, { replace: true });
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

export default Login;
