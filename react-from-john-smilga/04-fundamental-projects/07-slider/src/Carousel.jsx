import React, { useState } from "react";
import { shortList, list, longList } from "./data";

export const Carousel = () => {
  const [people, setPeople] = useState(list);
  let [currItem, setCurrItem] = useState(0);

  const prevSlide = () => {
    if (currItem <= 0) {
      currItem = people.length - 1;
      setCurrItem(currItem);
      return;
    } else {
      setCurrItem(currItem - 1);
    }
  };

  const nextSlide = () => {
    if (currItem >= people.length - 1) {
      currItem = 0;
      setCurrItem(currItem);
      return;
    } else {
      setCurrItem(currItem + 1);
    }
  };

  return (
    <div className="slider-container">
      {people.map((item, personIndex) => {
        const { id, name, title, image, quote } = item;

        return (
          <div
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currItem)}%)`,
            }}
            key={id}
          >
            <img className="person-img" src={image} alt={name} />
            <h2 className="name">{name}</h2>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
          </div>
        );
      })}

      {/* buttons */}
      <button className="prev" onClick={prevSlide}>
        prev
      </button>
      <button className="next" onClick={nextSlide}>
        next
      </button>
    </div>
  );
};
