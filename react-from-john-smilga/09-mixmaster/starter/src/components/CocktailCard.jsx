import React from "react";
import { Link } from "react-router-dom";

export const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <div className="cocktail-card">
      <div className="img-container">
        <img src={image} alt="not foundd" />
      </div>
      <div className="footer">
        <h4 className="name">{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </div>
  );
};
