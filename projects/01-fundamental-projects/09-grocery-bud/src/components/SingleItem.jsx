import React, { useState } from "react";

export const SingleItem = ({ id, text, completed, delItem, handleCheck }) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => {
          // setIsCompleted(!isCompleted);
          handleCheck(id);
        }}
      />
      <label
        htmlFor={id}
        className="item-name"
        style={{ textDecoration: completed && "line-through" }}
      >
        {text}
      </label>

      <button
        onClick={() => {
          delItem(id);
        }}
        className="btn del-btn"
        type="submit"
      >
        delete
      </button>
    </article>
  );
};
