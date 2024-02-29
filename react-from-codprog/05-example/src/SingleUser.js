import React from "react";

function SingleUser({ user, increaseAge, handleDel }) {
  console.log(increaseAge);
  console.log(user);

  const { id, name, age } = user;
  return (
    <div>
      <h2>firstName: {name}</h2>
      <p>Age: {age}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase age
      </button>

      <button
        onClick={() => {
          handleDel(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default SingleUser;
