import React from "react";

function FormRowSelect({ labelText, name, list, handleChange, value }) {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {labelText || name}
      </label>

      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect;
