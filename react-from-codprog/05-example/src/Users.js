import React from "react";
import SingleUser from "./SingleUser";

function Users({ users, increaseAge, handleDel }) {
  return (
    <>
      {users.map((user) => {
        return (
          <SingleUser
            key={user.id}
            user={user}
            increaseAge={increaseAge}
            handleDel={handleDel}
          />
        );
      })}
    </>
  );
}

export default Users;
