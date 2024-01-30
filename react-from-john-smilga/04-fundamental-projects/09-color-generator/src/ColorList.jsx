import React from "react";
import { SingleColor } from "./SingleColor";
import { nanoid } from "nanoid";

export const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return (
          <SingleColor key={nanoid()} color={color} index={index}></SingleColor>
        );
      })}
    </section>
  );
};
