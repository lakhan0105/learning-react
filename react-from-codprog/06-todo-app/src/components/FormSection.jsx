import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function FormSection({ handleSubmit }) {
  const [userInput, setUserInput] = useState("");
  const [newTaskObj, setNewTaskObj] = useState({
    taskName: "",
    taskStatus: false,
    id: "",
  });

  return (
    <section className="form-section center">
      <form
        className="form-el"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(newTaskObj);
          setUserInput("");
        }}
      >
        <input
          type="text"
          className="task-input"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            setNewTaskObj((prev) => {
              return { ...prev, taskName: e.target.value, id: nanoid() };
            });
          }}
        />
        <button className="add-btn">Add</button>
      </form>
    </section>
  );
}

export default FormSection;
