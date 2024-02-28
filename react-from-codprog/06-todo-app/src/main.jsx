import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";
import AppProvider from "./context/AppProvider.jsx";

export const AppContext = createContext();
const someVal = "somevalue";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext.Provider value={someVal}>
    <AppProvider>
      <App />
    </AppProvider>
  </AppContext.Provider>
);
