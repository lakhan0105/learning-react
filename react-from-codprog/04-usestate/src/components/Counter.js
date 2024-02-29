import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count:{count}</h1>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        increase
      </button>

      <button onClick={() => setCount(0)}>reset</button>

      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}

export default Counter;
