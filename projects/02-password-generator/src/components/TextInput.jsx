import React from "react";

export const TextInput = ({ pass, passwordRef, copyPass }) => {
  return (
    <div className="text-input">
      <input
        type="text"
        className="text-input-el"
        value={pass}
        readOnly
        ref={passwordRef}
      />
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          copyPass(passwordRef.current.value);
        }}
      >
        copy
      </button>
    </div>
  );
};
