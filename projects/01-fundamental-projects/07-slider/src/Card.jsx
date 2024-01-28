import React from "react";

export const Card = ({
  review,
  currItem,
  nextItem,
  prevItem,
  index,
  randCard,
}) => {
  const { id, image, name, title, quote } = review;

  return (
    <article
      className="card"
      style={{
        transform: `translateX(${100 * (index - currItem)}%)`,
      }}
    >
      <div className="img-cont">
        <img src={image} alt={name} />
      </div>
      <p className="name">{name}</p>
      <p className="job">{title}</p>
      <p className="desc">{quote}</p>
    </article>
  );
};
