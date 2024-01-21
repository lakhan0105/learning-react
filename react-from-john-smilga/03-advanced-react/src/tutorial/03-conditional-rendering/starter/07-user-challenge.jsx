import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  function loginUser() {
    setUser({ name: "Lakhan", pass: "dbwibd" });
  }

  function logoutUser() {
    setUser(null);
  }

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
          <button className="btn" onClick={logoutUser}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={loginUser}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

// const Login = () => {
//   return (
//     <div>
//       <h4>please login</h4>
//       <button className="btn" onClick={loginUser}>
//         login
//       </button>
//       {/* {user && <h5>userName:{prop.userName}</h5>} */}
//     </div>
//   );
// };

export default UserChallenge;
