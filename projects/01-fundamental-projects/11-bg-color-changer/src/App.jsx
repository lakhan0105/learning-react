import { useState } from "react";

function App() {
  const btnsArr = [
    "red",
    "green",
    "purple",
    "violet",
    "white",
    "black",
    "blue",
  ];

  const [color, setColor] = useState("white");

  const changeColor = (clr) => {
    setColor(clr);
  };

  return (
    <main style={{ backgroundColor: color }}>
      <div className="btns-container">
        {btnsArr.map((btnName) => {
          return (
            <button
              className="btn"
              onClick={() => {
                changeColor(btnName);
              }}
            >
              {btnName}
            </button>
          );
        })}
      </div>
    </main>
  );
}

export default App;
