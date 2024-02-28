import React from "react";

function User({ name, username, email, phone, address }) {
  return (
    <div>
      <h4>name: {name}</h4>
      <h4>username: {username}</h4>
      <h4>phone: {phone}</h4>
    </div>
  );
}

export default User;
