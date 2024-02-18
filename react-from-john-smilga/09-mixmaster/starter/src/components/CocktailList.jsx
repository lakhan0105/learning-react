import React from "react";
import { CocktailCard } from "../components/CocktailCard";

const CocktailList = ({ drinks }) => {
  // if no drinks are available
  if (!drinks) {
    return <h4>No matching cocktail found</h4>;
  }

  // formatted drinks
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <div className="cocktail-list">
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item}></CocktailCard>;
      })}
    </div>
  );
};

export default CocktailList;
