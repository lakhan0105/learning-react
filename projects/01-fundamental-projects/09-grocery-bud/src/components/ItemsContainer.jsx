import React from "react";
import { SingleItem } from "./SingleItem";

export const ItemsContainer = ({ data, setData, handleCheck, setLS }) => {
  function delItem(eId) {
    const newObj = data.filter((item) => {
      if (eId !== item.id) {
        return item;
      }
    });
    setData(newObj);
    setLS(newObj);
  }

  return (
    <section className="items-container">
      {data.map((item) => {
        const { id, text, completed } = item;
        return (
          <SingleItem
            delItem={delItem}
            key={id}
            id={id}
            text={text}
            completed={completed}
            handleCheck={handleCheck}
          ></SingleItem>
        );
      })}
    </section>
  );
};
