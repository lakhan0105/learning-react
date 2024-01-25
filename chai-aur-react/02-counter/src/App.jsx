import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const incVal = () => {
    setCounter(counter + 1);
  };

  const decVal = () => {
    if (!counter <= 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1> chai aur react</h1>
      <h2>counter : {counter}</h2>

      <button onClick={decVal}>dec</button>
      <button onClick={incVal}>inc</button>
    </>
  );
}

export default App;
