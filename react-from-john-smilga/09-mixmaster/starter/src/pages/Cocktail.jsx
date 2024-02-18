import axios from "axios";
import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  console.log(data);
  return {
    id,
    data,
  };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  const singleDrink = data.drinks[0];
  console.log(singleDrink);

  const {
    strDrink: name,
    strDrinkThumb: image,
    strGlass: glass,
    strAlcoholic: info,
    strCategory: cat,
    strInstructions: inst,
  } = singleDrink;

  return (
    <>
      <header className="single-drink-header">
        <Link to="/" className="btn">
          Back to home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="single-drink">
        <img src={image} alt="not found" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {cat}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions : </span>
            {inst}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cocktail;
