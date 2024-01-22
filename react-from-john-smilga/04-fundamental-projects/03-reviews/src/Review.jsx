import React from "react";

export const Review = (props) => {
  const { id, name, job, image, text, prevData, nextData } = props;

  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
      </div>
      <p className="author">{name}</p>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn btn" onClick={prevData}>
          prev
        </button>
        <button className="next-btn btn" onClick={nextData}>
          next
        </button>
      </div>
    </article>
  );
};
