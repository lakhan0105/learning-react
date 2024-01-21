import React from "react";

export const Refresh = () => {
  function reloadItems() {
    // setTours(arr);
    console.log("need to work on refresh");
  }

  return (
    <div>
      <h2>You removed all the items.. check console</h2>
      <button className="btn" onClick={reloadItems}>
        Refresh
      </button>
    </div>
  );
};
