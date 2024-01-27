import React from "react";

export const FilterBtnsCont = ({ btns, dispFiltItems }) => {
  return (
    <section className="filter-btns-cont">
      {btns.map((btn) => {
        return (
          <button
            onClick={() => {
              dispFiltItems(btn);
            }}
            className="btn"
            key={btn}
          >
            {btn}
          </button>
        );
      })}
    </section>
  );
};
