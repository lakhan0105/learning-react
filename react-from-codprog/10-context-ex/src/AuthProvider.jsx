import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  return (
    <AppContext.Provider value={{ auth, setAuth }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);

export default AuthProvider;
