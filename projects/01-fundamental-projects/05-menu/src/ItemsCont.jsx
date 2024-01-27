import React from "react";
import { Item } from "./Item";

export const ItemsCont = ({ menuData }) => {
  console.log(menuData);

  return (
    <section className="items-cont">
      {menuData.map((item) => {
        return <Item menuData={item} key={item.id}></Item>;
      })}
    </section>
  );
};
