import React, { useState } from "react";

export const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  function handleSub(e) {
    e.preventDefault();
    addColor(color);
  }

  return (
    <section className="container">
      <form className="color-form" onSubmit={handleSub}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />

        <input
          type="text"
          value={color}
          placeholder="#ffffff"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </section>
  );
};
