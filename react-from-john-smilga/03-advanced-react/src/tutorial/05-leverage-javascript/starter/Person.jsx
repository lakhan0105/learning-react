import avatar from "../../../assets/default-avatar.svg";
import React from "react";

export const Person = ({ name, nickName, images }) => {
  const img = images?.[0]?.small?.url || avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: "100px" }} />
      <p>{name}</p>
      <p>{nickName}</p>
    </div>
  );
};
