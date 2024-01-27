import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

export const SingleCard = ({ id, title, info }) => {
  const [ans, setAns] = useState(false);

  function showAns() {
    setAns((prev) => {
      return !prev;
    });
  }

  return (
    <article className="single-card" key={id}>
      <div className="single-card-top">
        <h4 className="question">{title}</h4>
        <button onClick={showAns} className="btn">
          {ans ? (
            <FaMinusCircle></FaMinusCircle>
          ) : (
            <FaPlusCircle></FaPlusCircle>
          )}
        </button>
      </div>
      {ans && <p className="answer">{info}</p>}
    </article>
  );
};
