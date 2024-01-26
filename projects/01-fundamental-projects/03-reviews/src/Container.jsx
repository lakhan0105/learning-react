import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export const Container = ({ data, nextCard, prevCard, randomCard }) => {
  const { id, name, image, text, job } = data;

  return (
    <section className="container">
      <article className="user">
        <div className="img-container">
          <img className="img" src={image} alt={name} />
        </div>
        <h2 className="user-name">{name}</h2>
        <h3 className="user-job">{job}</h3>
        <p className="user-review">{text}</p>
        <div className="btn-container">
          <button onClick={prevCard} className="nav-btn prev-btn">
            <FaAngleLeft></FaAngleLeft>
          </button>
          <button onClick={nextCard} className="nav-btn next-btn">
            <FaAngleRight></FaAngleRight>
          </button>
        </div>
        <button onClick={randomCard} className="random-btn">
          random
        </button>
      </article>
    </section>
  );
};
