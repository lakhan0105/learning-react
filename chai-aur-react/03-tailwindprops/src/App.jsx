import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./Card";

function App() {
  const userName = "Lakhan";
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl">taiwind test</h1>
      <Card userName={"Lakhan"}></Card>
      <Card userName={"dinesh"}></Card>
    </>
  );
}

export default App;
