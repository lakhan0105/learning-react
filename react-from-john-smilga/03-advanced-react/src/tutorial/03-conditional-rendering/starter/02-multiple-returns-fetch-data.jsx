import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setisError(false);
          isLoading(false);
          return;
        }
        const data = await resp.json();
        setUsers(data);
      } catch (error) {
        setisError(true);
      }
      // setisLoading to false as the data is loaded
      setisLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  return (
    <div>
      <img src={users.avatar_url} alt={users.name} />
      <h2>{users.name}</h2>
      <h3>Works at {users.company}</h3>
    </div>
  );
};
export default MultipleReturnsFetchData;
