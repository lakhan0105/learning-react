import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setValue(!value);
        }}
      >
        click
      </button>

      {/* {value ? <Component></Component> : <h2>value is false</h2>} */}
      {value && <Component></Component>}
    </div>
  );
};

const Component = () => {
  useEffect(() => {
    console.log("runs only on initial render");
    const someFunc = () => {};

    window.addEventListener("scroll", someFunc);
  }, []);

  return <h2>this is from the second component</h2>;
};

export default CleanupFunction;
