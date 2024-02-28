import { useState } from "react";
import CleanUpFunc from "./components/CleanUpFunc";
import FetchData from "./components/FetchData";
import MouseMoveEvent from "./components/MouseMoveEvent";

function App() {
  const [component, setComponent] = useState(true);

  return (
    <main>
      {/* <FetchData></FetchData> */}

      <label htmlFor="showComponent">show component</label>
      <input
        type="checkbox"
        id="showComponent"
        name="showComponent"
        checked={component}
        onChange={() => {
          setComponent((prev) => !prev);
        }}
      />

      {/* {component && <CleanUpFunc></CleanUpFunc>} */}

      {/* MOUSE MOVE EVENT LISTENER EX */}
      {/* {component && <MouseMoveEvent></MouseMoveEvent>} */}

      {/* FETCHDATA EXAMPLE */}
      {component && <FetchData></FetchData>}
    </main>
  );
}

export default App;
