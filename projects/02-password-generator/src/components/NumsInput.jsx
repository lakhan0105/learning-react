import React from "react";

export const NumsInput = ({ setHasNums }) => {
  return (
    <div className="nums-input">
      <input
        className="checkbox-input"
        id="num-checkbox"
        type="checkbox"
        onChange={() => {
          setHasNums((prev) => {
            return !prev;
          });
        }}
      />
      <label htmlFor="num-checkbox">Numbers</label>
    </div>
  );
};
