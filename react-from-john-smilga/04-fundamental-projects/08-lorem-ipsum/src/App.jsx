import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  // function that runs when the input is changed
  function handleChange(e) {
    if (e.target.value > data.length - 1) {
      return;
    }
    setCount(e.target.value);
  }

  // function when user submits the form
  function handleSub(e) {
    e.preventDefault();
    const updatedText = data.slice(0, count);
    setText(updatedText);
  }

  return (
    <main>
      <div className="section-center">
        <h2 className="title">TIRED OF BORING LOREM IPSUM?</h2>
        <form className="lorem-form" onSubmit={handleSub}>
          <label htmlFor="paras">Paragraphs: </label>
          <input
            type="number"
            name="paras"
            id="paras"
            value={count}
            onChange={handleChange}
          />
          <button className="btn">Generate</button>
        </form>

        <div className="paras-container lorem-text">
          {text.map((item, index) => {
            return (
              <p className="single-para" key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
