import React from "react";
import { SingleTour } from "./SingleTour";

export const Tours = ({ tours, delCard }) => {
  return (
    <section className="tours">
      {tours.map((tour) => {
        return (
          <SingleTour key={tour.id} tour={tour} delCard={delCard}></SingleTour>
        );
      })}
    </section>
  );
};
