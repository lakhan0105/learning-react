import "./App.css";
import User from "./components/User";

function App() {
  // create an obj to pass in the props
  const userInfo = { userName: "Lakhan", userAge: 33 };

  return <User userInfo={userInfo}></User>;
}

export default App;
