import React, { useState } from "react";

export const SingleQuestion = (props) => {
  const { title, info } = props;

  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          +
        </button>
      </header>
      <p>{showInfo ? info : ""}</p>
    </article>
  );
};
