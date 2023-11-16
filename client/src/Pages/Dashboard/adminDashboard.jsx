import React from "react";
import { Link } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
const adminDashboard = () => {
  let tokenData = localStorage.getItem("token");
  let { username } = jwtDecode(tokenData);

  const loginHandler = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <p>User Login - {username}</p>
      <Link to="/prodadd">Product Add</Link> <br></br>
      <Link to="/actionpanel">Action Panel</Link>
      <button onClick={() => loginHandler()}>Logout</button>
    </div>
  );
};

export default adminDashboard;
