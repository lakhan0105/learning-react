import React from "react";

export const User = ({ usersData }) => {
  return (
    <>
      {usersData.map((item) => {
        const { id, name, image, age } = item;

        return (
          <article className="user" key={id}>
            <div className="img-container">
              <img className="img" src={image} alt={name} />
            </div>
            <div className="user-info">
              <h2 className="user-name">{name}</h2>
              <p className="user-age">{age}years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
