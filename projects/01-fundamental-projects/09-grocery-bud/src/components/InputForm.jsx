import React, { useState } from "react";
import { nanoid } from "nanoid";

export const InputForm = ({ data, setData, setLS }) => {
  const [text, setText] = useState("");
  const newObj = { id: nanoid(), text: text, completed: false };

  function handleText(e) {
    setText(e.target.value);
    newObj.text = text;
  }

  function handleSub(e) {
    e.preventDefault();
    if (newObj.text !== "") {
      const newData = [...data, newObj];
      setData(newData);
      setLS(newData);
    } else {
      console.log("please write something and then submit");
    }
    setText("");
  }

  return (
    <form
      className="input-form"
      onSubmit={(e) => {
        handleSub(e);
      }}
    >
      <input
        className="text-input"
        type="text"
        onChange={(e) => {
          handleText(e);
        }}
        value={text}
      />

      <button type="submit" className="btn submit-btn">
        add item
      </button>
    </form>
  );
};
