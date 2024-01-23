import React from "react";
import { SingleQuestion } from "./SingleQuestion";

export const Questions = ({ cardData }) => {
  return (
    <div className="container">
      <h1>Questions</h1>

      {cardData.map((item) => {
        const { id, title, info } = item;
        return (
          <SingleQuestion key={id} title={title} info={info}></SingleQuestion>
        );
      })}
    </div>
  );
};
