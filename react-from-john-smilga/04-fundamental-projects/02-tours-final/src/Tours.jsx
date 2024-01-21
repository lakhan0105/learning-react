import React from "react";
import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour: removeTour }) => {
  console.log(tours);
  return (
    <div className="tours">
      {tours.map((item) => {
        return <Tour key={item.id} {...item} removeTour={removeTour}></Tour>;
      })}
    </div>
  );
};
