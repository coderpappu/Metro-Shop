import React from "react";
import { Link } from "react-router-dom";


const adminDashboard = () => {
 

  // let tokenData = localStorage.getItem("token");
  // let { username } = jwtDecode(tokenData);

  // const loginHandler = () => {
  // localStorage.removeItem("token");
  // token remove from localStorage
  // };

  return (
    <div>
      <Link to="/prodadd">Product Add</Link> <br></br>
      <Link to="/actionpanel">Action Panel</Link>
    </div>
  );
};

export default adminDashboard;
