import React from "react";
import { useAppContext } from "../AuthProvider";

function Users() {
  const { auth, setAuth } = useAppContext();
  const { name, email } = auth;

  function handleLogin() {
    setAuth({ name: "Lakhan", email: "lakhan0105@gmail.com" });
  }

  function handleLogout() {
    setAuth({});
  }

  if (name) {
    return (
      <div>
        <h1>Welcome</h1>
        <p>name: {name}</p>
        <p>email: {email}</p>
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  if (!name) {
    return (
      <>
        <h1>Please login</h1>
        <button onClick={handleLogin}>login</button>
      </>
    );
  }
}

export default Users;
