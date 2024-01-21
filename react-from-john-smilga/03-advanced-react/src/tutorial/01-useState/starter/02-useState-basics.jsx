import React, { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button className="btn" onClick={updateCount}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
