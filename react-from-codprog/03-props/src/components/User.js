function User({ userInfo }) {
  return (
    <div>
      <h1>Hello {userInfo.userName}</h1>
      <h2>You are {userInfo.userAge} years old</h2>
    </div>
  );
}

export default User;
