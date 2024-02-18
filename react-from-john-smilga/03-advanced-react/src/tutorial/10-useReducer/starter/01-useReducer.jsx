import React, { useReducer } from "react";
import { data } from "../../../data";

// set default state
const defaultState = {
  people: data,
};

// set reducer
const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...data, people: [] };
  }

  if (action.type === "RESET") {
    return { ...data, people: data };
  }

  if (action.type === "REMOVE_ITEM") {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const resetFunc = () => {
    dispatch({ type: "RESET" });
  };

  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length >= 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button className="btn" onClick={resetFunc}>
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
