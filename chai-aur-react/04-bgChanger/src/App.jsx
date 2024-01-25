import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-4 rounded">
          <button
            className="outline-none px-4"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            red
          </button>
          <button
            className="outline-none px-4"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            green
          </button>
          <button
            className="outline-none px-4"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
