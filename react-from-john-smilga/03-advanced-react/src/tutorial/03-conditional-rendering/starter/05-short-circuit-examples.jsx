import { useState } from "react";

// || for checking something like a text
// && for elements/jsx

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("dheeraj");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default text"}</h2>

      {/* {text && (
        <div>
          <h3>{name}</h3>
          <h3>hello</h3>
        </div>
      )} */}

      {/* component example */}
      {user && <Component name={user.name}></Component>}

      {/* ternary operator */}
      <h2>Ternary Operator</h2>
      <button>{isEditing ? "edit" : "add"}</button>

      {/* use ternary to return els */}
      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>user name is null</h4>
        </div>
      )}
    </div>
  );
};

const Component = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default ShortCircuitExamples;
