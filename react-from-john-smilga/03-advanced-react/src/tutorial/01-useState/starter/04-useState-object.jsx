import { useState } from "react";

const UseStateObject = () => {
  // setup 2 states
  // const [name, setName] = useState("Lakhan");
  // const [age, setAge] = useState(1);
  // const [hobby, setHobby] = useState("Reading books");

  const [person, setPerson] = useState({
    name: "Sarvan",
    age: 24,
    hobby: "Dancing",
  });

  const displayPerson = () => {
    setPerson({ name: "Lakhan", age: 55, hobby: "Reading" });
    // setPerson({ ...person, name: "Lakhan" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys:{person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        new person
      </button>
    </>
  );
};

export default UseStateObject;
