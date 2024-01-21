import React from "react";

export const Tour = (props) => {
  const { id, name, info, image, removeTour } = props;

  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <p>{info}</p>
      </div>
      <button
        className="btn delete-btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        remove
      </button>
    </article>
  );
};
