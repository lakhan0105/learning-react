import React from "react";

export const CharsInput = ({ setHasChars }) => {
  return (
    <div className="chars-input">
      <input
        className="checkbox-input"
        id="char-checkbox"
        type="checkbox"
        onChange={() => {
          setHasChars((prev) => !prev);
        }}
      />
      <label htmlFor="char-checkbox">Characters</label>
    </div>
  );
};
