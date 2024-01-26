import React from "react";
import { useState } from "react";

export const SingleTour = ({ tour, delCard }) => {
  const { id, name, image, info, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <div className="img-container">
        <img className="tour-img" src={image} alt={name} />
      </div>
      <div className="tour-info">
        <h3 className="tour-name">{name}</h3>
        <p className="tour-desc">
          {readMore ? info : `${info.substr(0, 100)}....`}
          <button
            className="read-more-btn"
            onClick={() => {
              setReadMore((prev) => !prev);
            }}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          onClick={() => {
            delCard(id);
          }}
          className="btn del-btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
};
