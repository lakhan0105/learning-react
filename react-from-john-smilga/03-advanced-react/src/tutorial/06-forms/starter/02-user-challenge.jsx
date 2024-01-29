import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  console.log(data);

  function handleSub(e) {
    e.preventDefault();
    // do something
    const fakeID = Date.now();
    const newUser = { id: fakeID, name: name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    console.log(e.target);
    setName("");
  }

  function del(eID) {
    const newUsers = users.filter((item) => {
      if (item.id != eID) {
        return item;
      }
    });

    setUsers(newUsers);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSub}>
        <h4>Add User</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}
      <h2>Users</h2>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <button
              onClick={() => {
                del(item.id);
              }}
              className="btn delete-btn"
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
