import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleEvent = () => {
    // setValue((currState) => {
    //   const newVal = currState + 1;
    //   return newVal;
    // });
    // console.log(value);

    setTimeout(() => {
      console.log("clicked me");
      setValue((currValue) => {
        return currValue + 1;
      });
    }, 2000);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleEvent}>
        click me
      </button>
    </div>
  );
};

export default UseStateGotcha;
