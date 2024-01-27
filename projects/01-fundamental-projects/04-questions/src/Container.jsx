import React from "react";
import { SingleCard } from "./SingleCard";

export const Container = ({ questions }) => {
  return (
    <section className="container">
      <h2 className="heading">Questions</h2>

      {questions.map((question) => {
        return <SingleCard {...question} key={question.id}></SingleCard>;
      })}
    </section>
  );
};
