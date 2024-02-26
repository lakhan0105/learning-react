import "./App.css";
import { useState } from "react";
import Users from "./Users";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Lakhan", age: 22 },
    { id: 2, name: "Dheeraj", age: 22 },
    { id: 3, name: "Sarvan", age: 22 },
  ]);

  function increaseAge(eId) {
    // const newUsers = [];
    // for (let user of data) {
    //   if (user.id === eId) {
    //     newUsers.push({ ...user, age: user.age + 1 });
    //   } else {
    //     newUsers.push(user);
    //   }
    // }
    // setData(newUsers);

    setData((prevState) => {
      return prevState.map((user) => {
        if (user.id === eId) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  function handleDel(eId) {
    // using for loop
    const newUsers = [];
    for (let user of data) {
      if (user.id !== eId) {
        newUsers.push({ ...user });
      }
    }
    setData(newUsers);

    // using cb and methods
    // setData((prevData) => {
    //   return prevData.filter((user) => {
    //     if (user.id !== eId) {
    //       return user;
    //     }
    //   });
    // });
  }

  return (
    <div className="App">
      <Users
        users={data}
        increaseAge={increaseAge}
        handleDel={handleDel}
      ></Users>
    </div>
  );
}

export default App;
