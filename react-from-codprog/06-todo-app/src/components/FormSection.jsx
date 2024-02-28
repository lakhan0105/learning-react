import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useReducer } from "react";

function reducer(newTask, action) {
  if (action.type === "UPDATE_NEWTASK") {
    return { ...newTask, taskName: action.payload.taskName, id: nanoid() };
  }
}

function FormSection({ handleSubmit }) {
  const [userInput, setUserInput] = useState("");

  const initialNewTask = { taskName: "", taskStatus: false, id: "" };
  const [newTask, dispatch] = useReducer(reducer, initialNewTask);

  return (
    <section className="form-section center">
      <form
        className="form-el"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(newTask);
          setUserInput("");
        }}
      >
        <input
          type="text"
          className="task-input"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            // setNewTaskObj((prev) => {
            //   return { ...prev, taskName: e.target.value, id: nanoid() };
            // });
            dispatch({
              type: "UPDATE_NEWTASK",
              payload: { taskName: e.target.value },
            });
          }}
        />
        <button className="add-btn">Add</button>
      </form>
    </section>
  );
}

export default FormSection;
