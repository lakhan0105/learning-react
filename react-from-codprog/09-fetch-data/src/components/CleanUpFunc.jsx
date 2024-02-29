import React, { useEffect, useState } from "react";

// 1: runs before the unmount of our component
// 2. when u provide dependency value
// - when the value changes
// - component re-renders
// - cleanup function
// - useEffect

function CleanUpFunc() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Inside useeffect");
    return function () {
      console.log("Inside cleanup function");
    };
  }, [counter]);

  return (
    <div>
      <h1>Count : {counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default CleanUpFunc;
