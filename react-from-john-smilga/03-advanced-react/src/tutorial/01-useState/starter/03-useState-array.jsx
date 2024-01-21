// import data
import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  let [people, setPeople] = useState(data);

  // clear list
  function clearList() {
    setPeople([]);
  }

  // remove single item
  function removeItem(id) {
    const filteredPeople = people.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });

    setPeople(filteredPeople);
  }

  return (
    <div>
      {people.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <button
              type="button"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}

      {/* button to clear the list */}
      <button className="btn" onClick={clearList}>
        clear
      </button>
    </div>
  );
};

export default UseStateArray;
