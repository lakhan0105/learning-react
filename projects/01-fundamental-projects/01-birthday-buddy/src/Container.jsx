import React, { useState } from "react";
import { User } from "./User";
import data from "./data";

export const Container = () => {
  const [users, setUsers] = useState(data);
  const [count, setCount] = useState(data.length);

  const clearFunc = () => {
    setUsers([]);
    setCount(0);
  };

  return (
    <div className="container">
      <h2>{count} Birthdays Today</h2>
      <User usersData={users}></User>
      <button onClick={clearFunc} className="clear-btn">
        clear all
      </button>
    </div>
  );
};
