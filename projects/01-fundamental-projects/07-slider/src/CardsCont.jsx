import React from "react";
import { Card } from "./Card";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export const CardsCont = ({
  reviews,
  currItem,
  setCurrItem,
  nextItem,
  prevItem,
}) => {
  return (
    <section className="cards-cont">
      {reviews.map((review, index) => {
        return (
          <Card
            key={review.id}
            review={review}
            currItem={currItem}
            setCurrItem={setCurrItem}
            nextItem={nextItem}
            prevItem={prevItem}
            index={index}
          ></Card>
        );
      })}

      <button
        className="nav-btn prev"
        onClick={() => {
          prevItem();
        }}
      >
        <GrFormPrevious />
      </button>
      <button
        className="nav-btn next"
        onClick={() => {
          nextItem();
        }}
      >
        <GrFormNext />
      </button>
    </section>
  );
};
