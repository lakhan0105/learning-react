import { Person } from "./components/Person";
import data from "./data";
import { useState } from "react";

const App = () => {
  // useState hook
  const [personData, setPerson] = useState(data);
  const clearAllFunc = () => {
    setPerson([]);
  };

  return (
    <main>
      <section className="container">
        <h3> {personData.length} Birthdays today</h3>

        <Person personData={personData}></Person>

        <button className="btn" onClick={clearAllFunc}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
