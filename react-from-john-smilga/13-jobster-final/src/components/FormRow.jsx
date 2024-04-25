import React from "react";

function FormRow({ labelText, name, type, value, handleChange }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name || labelText}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
}

export default FormRow;
