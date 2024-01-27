import React from "react";

export const Item = ({ menuData }) => {
  const { id, category, title, desc, img, price } = menuData;

  return (
    <article className="item">
      <div className="img-cont">
        <img src={img} alt={title} />
      </div>
      <div className="item-info">
        <h3 className="item-name">{title}</h3>
        <span className="item-price">${price}</span>
      </div>
      <p className="item-desc">{desc}</p>
    </article>
  );
};
