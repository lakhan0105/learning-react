import React from "react";

export const RangeInput = ({ limit, setLimit, genPass }) => {
  return (
    <div className="range-input">
      <input
        type="range"
        min={1}
        max={30}
        value={limit}
        onChange={(e) => {
          const newLimit = parseInt(e.target.value);
          setLimit(newLimit);
          genPass();
        }}
      />
      <label>Length({limit})</label>
    </div>
  );
};
