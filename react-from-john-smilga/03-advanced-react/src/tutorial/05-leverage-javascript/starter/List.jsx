import { people } from "../../../data";
import { Person } from "./Person";

import React from "react";

export const List = () => {
  return (
    <div>
      {people.map((item) => {
        return <Person key={item.id} {...item}></Person>;
      })}
    </div>
  );
};
