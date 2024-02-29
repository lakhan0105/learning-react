import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

function FetchData() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((resp) => {
        if (!(resp.status >= 200 && resp.status <= 299)) {
          setIsError(true);
          return;
        }
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: something went wrong</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return <User key={user.id} {...user}></User>;
      })}
    </div>
  );
}

export default FetchData;
