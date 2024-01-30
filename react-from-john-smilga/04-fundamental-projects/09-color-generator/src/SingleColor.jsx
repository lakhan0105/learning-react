import React from "react";

export const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  console.log(color);
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
