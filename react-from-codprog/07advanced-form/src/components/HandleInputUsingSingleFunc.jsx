import React from "react";
import { useState } from "react";

function HandleInputUsingSingleFunc() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName: </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div>
          <label htmlFor="lastName">LastName: </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HandleInputUsingSingleFunc;
